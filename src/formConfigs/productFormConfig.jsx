import * as yup from "yup";
import { useEffect, useState } from "react";
import { getAll } from "./../services/crudServices";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup
    .number()
    .required()
    .min(5)
    .transform((v) => (isNaN(v) ? 0 : v)),
});

export const productFormConfig = (onSubmit) => ({
  schema,
  fields: [
    {
      type: "text",
      label: "name",
      placeholder: "product name",
    },
    {
      type: "textarea",
      label: "description",
    },
    {
      type: "number",
      label: "price",
    },
    {
      type: "custom",
      label: "category",
      Component: CategorySelector,
    },
  ],
  onSubmit,
});

export const CategorySelector = ({ setValue }) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const cats = await getAll("category");
    setCategories(cats);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  return (
    <select
      onChange={handleSelect}
      id="countries"
      className="bg-primary-5 p-4 text-white rounded-lg"
    >
      {categories.map((cat, i) => (
        <option className="text-white" key={i} value={cat._id}>
          {cat.label}
        </option>
      ))}
    </select>
  );
};
