import { useEffect } from "react";

const IconSelector = ({ setValue }) => {
  useEffect(() => {
    setValue("AiTwotoneTags")
  } ,[])
  return <span>select an icon</span>;
};

export default IconSelector;
