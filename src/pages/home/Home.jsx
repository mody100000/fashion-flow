import { useEffect, useState } from "react";
import api from "../../Api/axios";
import CustomAreaChart from "../../components/common/AreaChart";
import MainLayout from "../../layouts/main-layout";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [custData, setCustData] = useState([]);

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
      reportData.push({ name: month, products: report[month].length });
    });
    setProdData(reportData);
  };

  const getCustomerReport = async () => {
    const { data: report } = await api.get("/customer/report/12");
    const reportData = [];
    Object.keys(report).forEach((month) => {
      reportData.push({ name: month, customers: report[month].length });
    });
    setCustData(reportData);
  };

  useEffect(() => {
    getCatReport(), getProductReport(), getCustomerReport();
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-6 p-4">
        <CustomAreaChart data={data} name="categories" />
        <CustomAreaChart data={prodData} name="products" />
        <CustomAreaChart data={custData} name="customers" />
        {/* <CustomAreaChart data={data}/> */}
      </div>
    </MainLayout>
  );
};

export default HomePage;
