import axiosClient from "./AxiosClient";


export const getRoadmapById = async (id) => {
    const res = await axiosClient.get(`/get?id=${id}`);
    return res.data;
};



export const updateSubstep = async (id, status) => {
    const res = await axiosClient.post("/updateSubstep",
        {
            "id": id,
            "completed": status
        }
    );
    return res.data;
};
    