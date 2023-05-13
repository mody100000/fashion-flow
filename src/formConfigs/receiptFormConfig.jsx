import * as yup from "yup";
import { useEffect, useState } from "react";
import { getAll } from "./../services/crudServices";
import Button from "../components/common/Button";
const schema = yup.object({
  customer: yup.string().required(),
  products: yup.array(),

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
    {
      type: "custom",
      label: "products",
      defaultValue: [],
      Component: ProductsSelector,
    },
  ],
  onSubmit,
});

const SingleProductSelector = ({ allProducts, handleSetValue }) => {
  return (
    <div className="shadow-lg my-3 p-4 ">
      {/* select the product */}

      <select
        onChange={(e) => handleSetValue("product", e.target.value)}
        id="countries"
        className="bg-primary-5 p-4 text-white rounded-lg w-full"
      >
        <option className="text-primary-1" value={""}>
          select Product
        </option>
        {allProducts.map((product, i) => (
          <option className="text-white" key={i} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>

      {/* Select the size */}
      <input
        type="number"
        className="text-lg p-3 bg-primary-5 w-full mt-5"
        placeholder="items number"
        onChange={(e) => handleSetValue("itemsNumber", e.target.value)}
      />
    </div>
  );
};

const ProductsSelector = ({ setValue }) => {
  const [productsArrNum, setProductsArrNum] = useState([1]);
  const [allProducts, setAllProducts] = useState([]);

  const [finalData, setFinalData] = useState({});

  const fetchAllProducts = async () => {
    const products = await getAll("product");
    setAllProducts(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleAddProductSelector = () => {
    const lastNum = productsArrNum[productsArrNum.length - 1];
    setProductsArrNum((prev) => [...prev, lastNum + 1]);
  };
  const handleSetValue = (n, key, value) => {
    const draft = Object.assign({}, finalData);
    const item = draft[n];
    if (item) {
      item[key] = value;
    } else {
      draft[n] = { [key]: value };
    }
    setFinalData(draft);

    const recieptProducts = [...Object.values(finalData)];
    setValue(recieptProducts);
  };
  return (
    <div>
      {productsArrNum.map((n) => (
        <SingleProductSelector
          handleSetValue={(key, value) => handleSetValue(n, key, value)}
          key={n}
          allProducts={allProducts}
        />
      ))}

      <Button type="button" onClick={handleAddProductSelector}>
        Add product
      </Button>
    </div>
  );
};

const CustomerSelector = ({ setValue, currentValue }) => {
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
