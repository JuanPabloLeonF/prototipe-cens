import { HeaderMain } from "../../layouts/HeaderMain/HeaderMain"
import "./Login.css"
import { useState } from "react"

export const Login: React.FC = () => {

    const [register, setRegister] = useState(false)

    const handlerRegister = () => {
        console.log("Registrarse");
        setRegister(true)
    }
        
    return (
        <section className="section-login">
            <HeaderMain />
            <div className={register ? "container-login register" : "container-login"}>
                <div className="container-img-login">
                    <img src="https://img.lovepik.com/background/20211101/medium/lovepik-scenery-mobile-phone-wallpaper-background-image_400535408.jpg" alt="imagen de fondo" />
                </div>
                <div className="container-form-login">
                        { register ? 
                        <form action="">
                            <h2>Datos del contacto</h2>
                            <div className="containers-inputs">
                                <input type="text" placeholder="Nombre" />
                                <input type="text" placeholder="Apellido" />
                            </div>
                            <div className="containers-inputs">
                                <input type="text" placeholder="Contacto" />
                                <input type="text" placeholder="Usuario" />
                            </div>
                            <div className="containers-inputs">
                                <input type="text" placeholder="Numero del medidor" />
                                <input type="email" placeholder="Correo" />
                            </div>
                            <input type="password" placeholder="Contraseña" />
                            <button type="submit">Confirmar</button>
                        </form> 
                    :
                        <form action="">
                            <div className="container-img-form">
                                <img src="vite.svg" alt="logo" />
                            </div>
                            <input type="text" placeholder="Usuario" />
                            <input type="password" placeholder="Contraseña" />
                            <div className="container-button-login">
                                <button type="button" onClick={handlerRegister}>Registrarse</button>
                                <button type="submit">Iniciar Sesión</button>
                            </div>
                        </form>
                        }
                </div>
            </div>

        </section>
    )
}