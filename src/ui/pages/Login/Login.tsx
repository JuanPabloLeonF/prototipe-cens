import { useState } from "react";
import { FormularyLogin } from "../../components/FormularyLogin/FormularyLogin";
import { FormularyRegister } from "../../components/FormularyRegister/FormularyRegister";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "./../../../domain/hooks/useMediaQuery"
import "./Login.css";

export const Login: React.FC = () => {
    const [register, setRegister] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const handlerRegister = () => {
        setRegister(true);
    };

    const containerVariants = {
        img: {
            animate: (isMobile: boolean) => ({ x: isMobile ? '0%' : (register ? '100%' : '0%') }),
        },
        form: {
            animate: (isMobile: boolean) => ({ x: isMobile ? '0%' : (register ? '-100%' : '0%') }),
        }
    };

    const formVariants = {
        initial: (isMobile: boolean) => ({ opacity: 0, x: isMobile ? 0 : (register ? 200 : -200) }),
        animate: { opacity: 1, x: 0 },
        exit: (isMobile: boolean) => ({ opacity: 0, x: isMobile ? 0 : (register ? -200 : 200) }),
    };

    return (
        <section className="section-login">
            <div className={register ? "container-login register" : "container-login"}>
                <motion.div
                    className="container-img-login"
                    custom={isMobile}
                    variants={containerVariants.img}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <img
                        src="imgs/bg-login.jpg"
                        alt="imagen de fondo"
                    />
                </motion.div>

                <motion.div
                    className="container-form-wrapper"
                    custom={isMobile}
                    variants={containerVariants.form}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <AnimatePresence mode="wait">
                        {register ?
                            <FormularyRegister key="registerForm" variants={formVariants} />
                            :
                            <FormularyLogin key="loginForm" handlerRegister={handlerRegister} variants={formVariants} />
                        }
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};