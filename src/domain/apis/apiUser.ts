
import type { ModelFormularyLogin, ModelFormularyRegister } from "../models/generic";
import type { UserModel } from "../models/userModel";
import { API_URL } from "./../models/envirments";
import axios from 'axios';

const USER_AUTHENTICATED = {
    user: "papo",
    password: "juan123"
}

export class ApiUser {

    constructor() {}

    static async login(formData: ModelFormularyLogin) {


        if (
            formData.user === USER_AUTHENTICATED.user && 
            formData.password === USER_AUTHENTICATED.password
        ) {
            alert("usuario autenticado")
            return USER_AUTHENTICATED;
        } else {
            alert("usuario no autenticado")
            return undefined
        }

        /*
        try {

            const data = new FormData();
            data.append('user', formData.user);
            data.append('password', formData.password);

            const response = await axios.post(`${API_URL}/login`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            console.log("response: ", response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error al iniciar sesión:", error.response?.data || error.message);
                throw new Error(error.response?.data?.message || 'Error desconocido al iniciar sesión');
            } else {
                console.error("Error inesperado:", error);
                throw new Error('Ha ocurrido un error inesperado');
            }
        }
        */
    }

    static async register(formData: ModelFormularyRegister) {

        if (formData.user === USER_AUTHENTICATED.user) {
            alert("usuario registrado")
            const response = {
                id: "1",
                user: formData.user,
                password: formData.password,
                name: formData.name,
                lastName: formData.lastName,
                contact: formData.contact,
                numberMeter: formData.numberMeter,
                email: formData.email,
            }
            console.log("response: ", response);
            return response;
        } else {
            alert("usuario no registrado")
            return undefined
        }

        /*
        try {

            const data = new FormData();
            data.append('name', formData.name);
            data.append('lastName', formData.lastName);
            data.append('contact', formData.contact);
            data.append('user', formData.user);
            data.append('numberMeter', formData.numberMeter);
            data.append('email', formData.email);
            data.append('password', formData.password);

            const response = await axios.post(`${API_URL}/register`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            console.log("response: ", response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error al registrar:", error.response?.data || error.message);
                throw new Error(error.response?.data?.message || 'Error desconocido al registrar');
            } else {
                console.error("Error inesperado:", error);
                throw new Error('Ha ocurrido un error inesperado');
            }
        }
        */
    }

    static async updateData(formData: UserModel) {
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('lastName', formData.lastName);
            data.append('contact', formData.contact);
            data.append('user', formData.user);
            data.append('numberMeter', formData.numberMeter);
            data.append('email', formData.email);
            data.append('password', formData.password);

            const response = await axios.post(`${API_URL}/update/${formData.id}`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            console.log("response: ", response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error al actualizar:", error.response?.data || error.message);
                throw new Error(error.response?.data?.message || 'Error desconocido al actualizar');
            } else {
                console.error("Error inesperado:", error);
                throw new Error('Ha ocurrido un error inesperado');
            }
        }
    }
}