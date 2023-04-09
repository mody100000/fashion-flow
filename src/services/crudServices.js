import api from "./../Api/axios";

export const getAll = async (name) => {
  return (await api.get(name)).data;
};

export const createResource = async (name, data) => {
  return (await api.post(name, data)).data;
};
