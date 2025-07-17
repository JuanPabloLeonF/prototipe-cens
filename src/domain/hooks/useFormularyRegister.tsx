import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ApiUser } from "../apis/apiUser";
import type { ModelFormularyRegister } from "../models/generic";

export const useFormularyRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ModelFormularyRegister>({} as ModelFormularyRegister);

    const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await ApiUser.register(formData);
        if (response?.user) {
            navigate('/history');
        }
    };
    
    return  {
        handlerInputChange,
        handlerSubmit,
    }
};
