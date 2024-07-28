import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpClient {
    private instance: AxiosInstance;

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.instance.interceptors.response.use(
            this.handleResponse,
            this.handleError
        );
    }

    private handleResponse(response: AxiosResponse) {
        return response;
    }

    private handleError(error: unknown) {
        return Promise.reject(error);
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.get<T>(url, config);
    }

    post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.post<T>(url, data, config);
    }
}

export default new HttpClient(import.meta.env.VITE_BACKEND_URL);
