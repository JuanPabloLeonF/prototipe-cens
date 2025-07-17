import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../statesGlobal/storeGlobal";
import { useNavigate } from "react-router-dom";
import { profileSlice } from "../reduces/profile";
import { ApiUser } from "../apis/apiUser";

export const useProfile = () => {
    const { userData } = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(userData);

    const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlerGoHistory = () => {
        navigate("/history");
    };
    const handlerUpdateData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await ApiUser.updateData(formData);
        dispatch(profileSlice.actions.updateData(response));
        alert("¡Datos actualizados!");
    };

    useEffect(() => {
        setFormData(userData);
    }, [userData]);

    return {
        formData,
        handlerInputChange,
        handlerGoHistory,
        handlerUpdateData,
    };
};