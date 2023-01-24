import axios from "axios";
import { SERVER_URL } from "../constants";
import { showLoader, hideLoader } from "../components/UI/loader/loader";
import { showErrorModal } from "../components/UI/modal/modal";

export const HttpClient = axios.create({
    baseURL: SERVER_URL
});

HttpClient.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    showLoader();
    return config;
}, error => {
    showErrorModal(error);
    return Promise.reject(error);
});

HttpClient.interceptors.response.use(response => {
    hideLoader();
    return response;
}, error => {
    showErrorModal(error);
    hideLoader();
    return Promise.reject(error);
});
