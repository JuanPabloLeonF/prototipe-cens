import React from 'react';
import './FormularyRegister.css';
import { motion } from 'framer-motion';
import { useFormularyRegister } from '../../../domain/hooks/useFormularyRegister';

export const FormularyRegister: React.FC<{ variants: any }> = ({ variants }) => {

    const {
        handlerSubmit,
        handlerInputChange,
    } = useFormularyRegister();

    return (
        <motion.form
            className="form-register"
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onSubmit={handlerSubmit}
        >
            <h2>Datos del contacto</h2>
            <div className="containers-inputs">
                <input required name="name" type="text" placeholder="Nombre" onChange={handlerInputChange} />
                <input required name="lastName" type="text" placeholder="Apellido" onChange={handlerInputChange} />
            </div>
            <div className="containers-inputs">
                <input required name="contact" type="text" placeholder="Contacto" onChange={handlerInputChange} />
                <input required name="user" type="text" placeholder="Usuario" onChange={handlerInputChange} />
            </div>
            <div className="containers-inputs">
                <input required name="numberMeter" type="text" placeholder="Numero del medidor" onChange={handlerInputChange} />
                <input required name="email" type="email" placeholder="Correo" onChange={handlerInputChange} />
            </div>
            <input required name="password" type="password" placeholder="Contraseña" onChange={handlerInputChange} />
            <button type="submit">Confirmar</button>
        </motion.form>
    );
};