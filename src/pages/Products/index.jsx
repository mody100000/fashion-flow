import MainLayout from "../../layouts/main-layout";
import Crud from "./../../components/common/Crud/index";

const ProductsPage = () => {
  return (
    <MainLayout>
      <Crud
        name="product"
        fields={[
          {
            name: "name",
            type: "text",
          },
        ]}
      />
    </MainLayout>
  );
};

export default ProductsPage;
