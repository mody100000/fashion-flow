import { useEffect } from "react";
import { getAll } from "../../../services/crudServices";
import { useState } from "react";
import IconByName from "./../IconByName/index";
import moment from "moment";
import { camelCaseToWords } from "../../../utils/camelCaseToWords";
import { BsThreeDots } from "react-icons/bs";
const Crud = ({ name, fields }) => {
  const [data, setData] = useState([]);

  const getAllResources = async () => {
    const resources = await getAll(name);
    setData(resources);
  };
  useEffect(() => {
    getAllResources();
  }, []);

  const getSingleRowData = (item) => {
    return (
      <>
        {fields.map((field) => (
          <td className="px-6 py-4" key={field.name}>
            <HandleDataType field={field} item={item} />
          </td>
        ))}
        <td className="px-6 py-4">
          <BsThreeDots color="white" />
        </td>
      </>
    );
  };

  const HandleDataType = ({ field, item }) => {
    const type = field.type;
    const value = item[field.name];
    if (type === "text") return <span className="text-white">{value}</span>;
    if (type === "icon") return <IconByName color="white" name={value} />;
    if (type === "date")
      return (
        <span className="text-white">
          {moment(value).format(field?.format || "d MMM YYYY")}
        </span>
      );
  };

  return (
    <div className="relative overflow-x-auto shadow-2xl rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 bg-primary-4 rounded-lg">
        <thead className="text-md text-primary-0 uppercase bg-primary-5 ">
          <tr>
            {fields.map((field) => (
              <th key={field.name} scope="col" className="px-6 py-3">
                {camelCaseToWords(field.name)}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={item._id}
              className={i % 2 == 0 ? "bg-primary-4" : "bg-primary-5"}
            >
              {getSingleRowData(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
