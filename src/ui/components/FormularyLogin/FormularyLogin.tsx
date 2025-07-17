import React from 'react';
import './FormularyLogin.css';
import { motion } from 'framer-motion';
import { useFormularyLogin } from '../../../domain/hooks/useFormularyLogin';

interface FormularyLoginProps {
    handlerRegister: () => void;
    variants: any;
}

export const FormularyLogin: React.FC<FormularyLoginProps> = ({ handlerRegister, variants }) => {

    const {
        handlerSubmit,
        handlerInputChange,
    } = useFormularyLogin();

    return (
        <motion.form
            className="form-login"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onSubmit={handlerSubmit}
        >
            <div className="container-img-form">
                <img src="imgs/user.png" alt="usuario" />
            </div>
            <input required name="user" onChange={handlerInputChange} type="text" placeholder="Usuario" />
            <input required name="password" onChange={handlerInputChange} type="password" placeholder="Contraseña" />
            <div className="container-button-login">
                <button type="button" onClick={handlerRegister}>Registrarse</button>
                <button type="submit">Iniciar Sesión</button>
            </div>
        </motion.form>
    );
};