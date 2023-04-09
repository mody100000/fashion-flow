import { useEffect } from "react";
import { createResource, getAll } from "../../../services/crudServices";
import { useState } from "react";
import IconByName from "./../IconByName/index";
import moment from "moment";
import { camelCaseToWords } from "../../../utils/camelCaseToWords";
import { BsThreeDots } from "react-icons/bs";
import ConrnerButton from "./../CornerButton/index";
import { AnimatePresence } from "framer-motion";
import FormBuilder from "../../formBuilder";
import Modal from "../../Modal";
import { showToast } from "../../../utils/showToast";

const Crud = ({ name, fields, formConfig }) => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const getAllResources = async () => {
    const resources = await getAll(name);
    setData(resources);
  };
  useEffect(() => {
    getAllResources();
  }, []);

  const onSubmit = async (data) => {
    const newRecord = await createResource(name, data);
    setData((prev) => [newRecord, ...prev]);
    close();
    showToast(`${name} is created`, "success");
  };

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

    if (type === "list") {
      const arrayName = field.name.split(".")[0];
      const keyName = field.name.split(".")[1];

      const arr = item[arrayName];
      return (
        <ul>
          {arr.map((item, i) => (
            <li className="list-disc" key={i}>
              {item[keyName]}
            </li>
          ))}
        </ul>
      );
    }

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
    <div className="relative overflow-x-auto shadow-2xl rounded-lg h-full">
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
      <ConrnerButton onClick={open} />
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            title={`create ${name}`}
            modalOpen={modalOpen}
            handleClose={close}
          >
            <FormBuilder config={formConfig(onSubmit)} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Crud;
