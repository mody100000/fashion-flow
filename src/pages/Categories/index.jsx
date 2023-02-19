import MainLayout from "../../layouts/main-layout";
import Card from "../../components/categoryCard/index";
import ConrnerButton from "../../components/common/CornerButton";

const CategoriesPage = () => {
  return (
    <div>
      <MainLayout>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 h-full overflow-y-auto overflow-x-hidden p-4">
          <ConrnerButton />
        
          <Card itemsCount={7} title="clothes" iconName="GiClothes" />
          <Card itemsCount={7} title="clothes" iconName="GiClothes" />
       
     

        </div>
      </MainLayout>
    </div>
  );
};

export default CategoriesPage;
