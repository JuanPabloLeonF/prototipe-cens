import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ApiUser } from "../apis/apiUser";
import type { ModelFormularyLogin } from "../models/generic";

export const useFormularyLogin = () => {

    const [formData, setFormData] = useState<ModelFormularyLogin>({} as ModelFormularyLogin);
    const navigate = useNavigate();

    const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await ApiUser.login(formData);
        if (response?.user) {
            navigate('/history');
        }
    };

    return {
        handlerInputChange,
        handlerSubmit,
    };
};