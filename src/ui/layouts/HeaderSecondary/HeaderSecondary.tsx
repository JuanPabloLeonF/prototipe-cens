import { useHeaderSecondary } from "../../../domain/hooks/useHeaderSecondary";
import "./HeaderSecondary.css";

export const HeaderSecondary: React.FC = () => {

    const {
        showProfileFunction,
        handlerShowProfileFunction,
        handlerLogout,
        handlerProfile,
        userData
    } = useHeaderSecondary();

    return (
        <header className="header-secondary">
            <div className="container-img">
                <img src="imgs/logo.png" alt="logo" />
            </div>
            <div onClick={handlerShowProfileFunction} className="container-profile">
                <div className="container-img-profile">
                    <img src="imgs/user.png" alt="user" />
                </div>
                <p>{userData.user}</p>
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