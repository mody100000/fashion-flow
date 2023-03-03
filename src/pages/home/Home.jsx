import MainLayout from "../../layouts/main-layout";
import useLocale from "../../contexts/LocaleContext";

const HomePage = () => {
  const { t } = useLocale();
  return (
    <MainLayout>
      <h1 className="text-white text-center text-3xl my-4 font-bold">
        {t("home page")}
      </h1>
    </MainLayout>
  );
};

export default HomePage;
