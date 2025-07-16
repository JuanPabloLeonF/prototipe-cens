import React from 'react';
import './FormularyLogin.css';
import { motion } from 'framer-motion';

interface FormularyLoginProps {
    handlerRegister: () => void;
    variants: any;
}

export const FormularyLogin: React.FC<FormularyLoginProps> = ({ handlerRegister, variants }) => {
    return (
        <motion.form
            className="form-login"
            action=""
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="container-img-form">
                <img src="imgs/user.png" alt="usuario" />
            </div>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <div className="container-button-login">
                <button type="button" onClick={handlerRegister}>Registrarse</button>
                <button type="submit">Iniciar Sesión</button>
            </div>
        </motion.form>
    );
};