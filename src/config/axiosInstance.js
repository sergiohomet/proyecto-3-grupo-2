import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://backend-veterinaria-patitas.onrender.com/api/veterinaria",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                try {
                    const response = await axiosInstance.post("/refresh-token", { refreshToken });
                    const newToken = response.data.token;
                    localStorage.setItem("token", newToken);
                    error.config.headers.Authorization = `Bearer ${newToken}`;
                    return axiosInstance(error.config);
                } catch (refreshError) {
                }
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;