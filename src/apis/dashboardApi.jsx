import axiosClient from "./AxiosClient";

export const getAllRoadmap = async () => {
  const res = await axiosClient.get("/get/all");
  return res.data;
};
