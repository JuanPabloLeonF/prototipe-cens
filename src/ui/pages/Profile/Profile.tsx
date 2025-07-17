import "./Profile.css"
import { useProfile } from "../../../domain/hooks/useProfile"

export const Profile = () => {

    const {
        formData,
        handlerInputChange,
        handlerGoHistory,
        handlerUpdateData,
    } = useProfile()

    return (
        <section className="profile">
            <form onSubmit={handlerUpdateData} className="container-data">
                <img src="imgs/back.png" alt="Volver" onClick={handlerGoHistory} />
                <h2>Datos</h2>
                <div className="container-inputs">
                    <input required type="text" name="name" value={formData.name} onChange={handlerInputChange} />
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handlerInputChange} />
                </div>
                <div className="container-inputs">
                    <input required type="text" name="user" value={formData.user} onChange={handlerInputChange} />
                    <input required type="text" name="contact" value={formData.contact} onChange={handlerInputChange} />
                </div>
                <div className="container-inputs">
                    <input required type="text" name="numberMeter" value={formData.numberMeter} onChange={handlerInputChange} />
                    <input required type="email" name="email" value={formData.email} onChange={handlerInputChange} />
                </div>
                <div className="container-inputs">
                    <input required type="password" name="password" value={formData.password} onChange={handlerInputChange} />
                </div>
                <button type="submit">Actualizar datos</button>
            </form>
        </section>
    )
}