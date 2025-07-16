import "./HeaderMain.css"

export const HeaderMain: React.FC = () => {
    return (
        <header className="header-main">
            <div className="container-logo">
                <img src="imgs/logo.png" alt="logo" />
            </div>
            <h2>AGPE</h2>
            <div className="container"></div>
        </header>
    )
}