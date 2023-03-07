import { useEffect, useState } from "react";
import api from "../../Api/axios";
import CustomAreaChart from "../../components/common/AreaChart";
import MainLayout from "../../layouts/main-layout";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [prodData, setProdData] = useState([]);

  const getCatReport = async () => {
    const { data: report } = await api.get("/category/report/12");
    const reportData = [];
    Object.keys(report).forEach((month) => {
      reportData.push({ name: month, categories: report[month].length });
    });
    setData(reportData);
  };

  const getProductReport = async () => {
    const { data: report } = await api.get("/product/report/12");
    const reportData = [];
    Object.keys(report).forEach((month) => {
      reportData.push({ name: month, product: report[month].length });
    });
    setProdData(reportData);
  };

  useEffect(() => {
    getCatReport(), getProductReport();
  }, []);

  return (
    <MainLayout>
      <div className="flex">
        <CustomAreaChart data={data} name="categories" />
        <CustomAreaChart data={prodData} name="product" />
        {/* <CustomAreaChart data={data}/> */}
      </div>
    </MainLayout>
  );
};

export default HomePage;
