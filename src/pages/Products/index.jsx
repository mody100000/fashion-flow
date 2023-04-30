import MainLayout from "../../layouts/main-layout";
import Crud from "./../../components/common/Crud/index";
import useLocale from "../../contexts/LocaleContext";
import { productFormConfig } from "../../formConfigs/productFormConfig";

const ProductsPage = () => {
  const { t } = useLocale();

  return (
    <MainLayout>
      <Crud
        name="product"
        fields={[
          {
            name: "name",
            type: "text",
          },
          {
            name: "price",
            type: "text",
          },
          {
            name: "discount",
            type: "text",
          },
          {
            name: "createdAt",
            type: "date",
          },
          {
            name: "updatedAt",
            type: "date",
          },
          {
            name: "sizes.label",
            type: "list",
          },
          // {
          //   name: "category",
          //   type: "text",
          // },
        ]}
        formConfig={productFormConfig}
      />
    </MainLayout>
  );
};

export default ProductsPage;
