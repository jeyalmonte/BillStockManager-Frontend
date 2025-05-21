import { ROUTES_V1 } from "constants/api.constants";
import { LoginInput, LoginResponse, RegisterInput } from "../types";
import request from "lib/axios/request"

const authService = {
    async login(data: LoginInput): Promise<LoginResponse> {
        const response = await request({
            method: "POST",
            url: `${ROUTES_V1.AUTH}/login`,
            data: data,
        });

        return response.data;
    },

    async register(data: RegisterInput): Promise<void> {
        await request({
            method: "POST",
            url: `${ROUTES_V1.AUTH}/register`,
            data: data
        });
    }
};

export default authService;
