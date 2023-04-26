import MainLayout from "../../layouts/main-layout";
import Crud from "./../../components/common/Crud/index";
import useLocale from "../../contexts/LocaleContext";
import { customerFormConfig } from "../../formConfigs/customerFormConfig";

const CustomersPage = () => {
  const { t } = useLocale();

  return (
    <MainLayout>
      <Crud
        name="customer"
        fields={[
          {
            name: "name",
            type: "text",
          },
          {
            name: "phone",
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
        ]}
        formConfig={customerFormConfig}
      />
    </MainLayout>
  );
};

export default CustomersPage;
