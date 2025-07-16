import React from 'react';
import './FormularyRegister.css';
import { motion } from 'framer-motion';

export const FormularyRegister: React.FC<{ variants: any }> = ({ variants }) => {
    return (
        <motion.form
            className="form-register"
            action=""
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
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
        </motion.form>
    );
};