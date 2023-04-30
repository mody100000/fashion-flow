import * as yup from "yup";
import { useEffect, useState } from "react";
import { getAll } from "./../services/crudServices";
const schema = yup.object({
  customer: yup.string().required(),
  // products: yup.array().required().min(1),

  // .items({
  //   product: yup.string().required(),
  //   label: yup
  //     .string()
  //     .required()
  //     .valid([
  //       "xs",
  //       "sm",
  //       "md",
  //       "lg",
  //       "xl",
  //       "xxl",
  //       "3xl",
  //       "4xl",
  //       "5xl",
  //       "extra large",
  //     ])
  //     .label("size label"),
  //   stock: yup.number().default(0),
  // }),
});

export const receiptFormConfig = (onSubmit) => ({
  schema,
  fields: [
    {
      type: "custom",
      label: "customer",
      Component: CustomerSelector,
    },
  ],
  onSubmit,
});
export const CustomerSelector = ({ setValue, currentValue }) => {
  const [customers, setCustomers] = useState([]);
  const getCustomers = async () => {
    const custs = await getAll("customer");
    setCustomers(custs);
  };
  useEffect(() => {
    if (customers.length === 0) getCustomers();
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
      <option className="text-primary-1" value={""}>
        select customer
      </option>
      {customers.map((cust, i) => (
        <option
          selected={cust._id === currentValue}
          className="text-white"
          key={i}
          value={cust._id}
        >
          {cust.name}
        </option>
      ))}
    </select>
  );
};
