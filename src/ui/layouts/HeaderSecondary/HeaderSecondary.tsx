import "./HeaderSecondary.css";

export const HeaderSecondary: React.FC = () => {
    return (
        <header className="header-secondary">
            <div className="container-img">
                <img src="imgs/logo.png" alt="logo" />
            </div>
            <div className="container-profile">
                <div className="container-img-profile">
                    <img src="imgs/user.png" alt="user" />
                </div>
                <p>Nombre usuario</p>
            </div>
        </header>
    );
};