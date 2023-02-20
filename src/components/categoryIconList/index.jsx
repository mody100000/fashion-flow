import { lazy, useEffect, useState } from "react";
import { formatIconName } from "../../utils/formattedIconName";

const CategoryIconList = () => {
  const [icons, setIcons] = useState([]);

  const getAllIcons = async () => {
    const icons = await import(`react-icons/fc`);
    setIcons(icons);
  };

  useEffect(() => {
    getAllIcons();
  }, []);
//   TODO: add search icons
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-7 lg:grid-cols-7">
      {Object.keys(icons).map((key , i) => (
        <span className="text-3xl text-white mx-auto items-center flex flex-col gap-2" 
        
        key={i}>
            <span className="bg-gray-900 p-4 rounded-lg">{icons[key]()}</span>
            <span className="text-sm font-semibold">{formatIconName(key)}</span>
          
        </span>
      ))}
    </div>
  );
};

export default CategoryIconList;
