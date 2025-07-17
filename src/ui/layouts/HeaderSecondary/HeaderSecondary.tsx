import { useState } from "react";
import "./HeaderSecondary.css";
import { useNavigate } from "react-router-dom";

export const HeaderSecondary: React.FC = () => {

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

    return (
        <header className="header-secondary">
            <div className="container-img">
                <img src="imgs/logo.png" alt="logo" />
            </div>
            <div onClick={handlerShowProfileFunction} className="container-profile">
                <div className="container-img-profile">
                    <img src="imgs/user.png" alt="user" />
                </div>
                <p>Nombre usuario</p>
            </div>
            {
                showProfileFunction && (
                    <div className="container-profile-function">
                        <span onClick={handlerProfile}>Perfil</span>
                        <span onClick={handlerLogout}>Cerrar Sesión</span>
                    </div>
                )
            }
        </header>
    );
};