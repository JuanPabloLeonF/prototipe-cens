import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../statesGlobal/storeGlobal";

export const useHeaderSecondary = () => {

    const { userData } = useSelector((state: RootState) => state.profile);
    const [showProfileFunction, setShowProfileFunction] = useState(false);
    const navigate = useNavigate();

    const handlerShowProfileFunction = () => {
        setShowProfileFunction(!showProfileFunction);
    };

    const handlerLogout = () => {
        navigate('/');
        setShowProfileFunction(false);
    };

    const handlerProfile = () => {
        navigate('/profile');
        setShowProfileFunction(false);
    }; 

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return {
        showProfileFunction,
        handlerShowProfileFunction,
        handlerLogout,
        handlerProfile,
        userData
    };
};
