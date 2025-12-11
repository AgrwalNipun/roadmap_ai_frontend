import axiosClient from "./AxiosClient";


export const getRoadmapById = async (id) => {
    const res = await axiosClient.get(`/get?id=${id}`);
    return res.data;
};



export const updateSubstepStatus = async (id, status) => {
    const res = await axiosClient.put("/updateSubstep",
        {
            "id": id,
            "completed": status
        }
    );
    return res.data;
};



export const generateRoadmap = async (topic) => {
    const res = await axiosClient.get(`/generate?prompt=${topic}`);
    return res.data;
};



export const downloadRoadmap = async (id) => {
    const response = await axiosClient.get(`/download?id=${id}`, {
        responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "roadmap.pdf");

    document.body.appendChild(link);
    link.click();
    link.remove();
};

