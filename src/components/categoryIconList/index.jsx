import { useEffect, useState } from "react";
import { formatIconName } from "../../utils/formattedIconName";
import Spinner from "../common/Spinner";

const CategoryIconList = () => {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllIcons = async () => {
    setLoading(true);
    const fcIcons = await import(`react-icons/fc`);
    // const aiIcons = await import(`react-icons/ai`);
    // const ciIcons = await import(`react-icons/ci`);
    setIcons(Object.assign({}, fcIcons));
    setLoading(false);
  };

  useEffect(() => {
    getAllIcons();
  }, []);
  //   TODO: add search icons
  return (
    <>
      {loading && <Spinner className="mx-auto" />}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-7 lg:grid-cols-7">
        {Object.keys(icons).map((key, i) => (
          <span
            className="text-3xl text-white mx-auto items-center flex flex-col gap-2"
            key={i}
          >
            <span className="bg-gray-900 p-4 rounded-lg">{icons[key]()}</span>
            <span className="text-xs md:text-sm font-semibold">
              {formatIconName(key)}
            </span>
          </span>
        ))}
      </div>
    </>
  );
};

export default CategoryIconList;
