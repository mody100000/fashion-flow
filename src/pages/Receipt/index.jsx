import MainLayout from "../../layouts/main-layout";
import Crud from "./../../components/common/Crud/index";
import useLocale from "../../contexts/LocaleContext";
import { receiptFormConfig } from "../../formConfigs/receiptFormConfig";
import requireAuth from "../../components/requireAuth";

const ReceiptPage = () => {
  const { t } = useLocale();

  return (
    <MainLayout>
      <Crud
        name="receipt"
        fields={[
          {
            name: "number",
            type: "text",
          },
          {
            name: "customer",
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
            name: "products.label",
            type: "list",
          },
        ]}
        formConfig={receiptFormConfig}
      />
    </MainLayout>
  );
};

export default requireAuth(ReceiptPage);
