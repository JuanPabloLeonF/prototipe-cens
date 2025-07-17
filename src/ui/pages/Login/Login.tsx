import { FormularyLogin } from "../../components/FormularyLogin/FormularyLogin";
import { FormularyRegister } from "../../components/FormularyRegister/FormularyRegister";
import { AnimatePresence, motion } from "framer-motion";
import "./Login.css";
import { useLogin } from "./../../../domain/hooks/useLogin";

export const Login: React.FC = () => {
    
    const {
        register,
        handlerRegister,
        containerVariants,
        formVariants,
        isMobile
    } = useLogin()

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