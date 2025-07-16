import { useState } from "react";
import "./HeaderSecondary.css";

export const HeaderSecondary: React.FC = () => {

    const [showProfileFunction, setShowProfileFunction] = useState(false);

    const handlerShowProfileFunction = () => {
        setShowProfileFunction(!showProfileFunction);
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
                        <span>Perfil</span>
                        <span>Cerrar Sesión</span>
                    </div>
                )
            }
        </header>
    );
};