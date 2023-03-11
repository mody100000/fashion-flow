import MainLayout from "../../layouts/main-layout";
// import Card from "../../components/categoryCard/index";
import ConrnerButton from "../../components/common/CornerButton";
import useLocale from "../../contexts/LocaleContext";
import FormBuilder from "./../../components/formBuilder/index";
import { categoryFormConfig } from "../../formConfigs/category";

const CategoriesPage = () => {
  const { t } = useLocale();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 h-full overflow-y-auto overflow-x-hidden p-4">
          <ConrnerButton />
          <FormBuilder config={categoryFormConfig(onSubmit)} />
          {/* <Card itemsCount={7} title={t("clothes")} iconName="GiClothes" /> */}
          {/* <Card itemsCount={7} title={t("clothes")} iconName="GiClothes" /> */}
        </div>
      </MainLayout>
    </div>
  );
};

export default CategoriesPage;
