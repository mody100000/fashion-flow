import api from "./../Api/axios";

export const getAll = async (name) => {
  return (await api.get(name)).data;
};
