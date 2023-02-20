import CategoryIconList from "../../components/categoryIconList";
import MainLayout from "../../layouts/main-layout";

const HomePage = () => {
  return (
    <MainLayout>
      <h1 className="text-white text-center text-3xl my-4 font-bold">
        Home Page
      </h1>
      <CategoryIconList />
    </MainLayout>
  );
};

export default HomePage;
