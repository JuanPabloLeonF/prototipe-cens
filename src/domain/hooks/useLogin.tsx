import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export const useLogin = () => {

    const [register, setRegister] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    const handlerRegister = () => {
        setRegister(true);
    };
    
    const containerVariants = {
        img: {
            animate: () => ({ x: isMobile ? '0%' : (register ? '100%' : '0%') }),
        },
        form: {
            animate: () => ({ x: isMobile ? '0%' : (register ? '-100%' : '0%') }),
        }
    };
    
    const formVariants = {
        initial: () => ({ opacity: 0, x: isMobile ? 0 : (register ? 200 : -200) }),
        animate: { opacity: 1, x: 0 },
        exit: () => ({ opacity: 0, x: isMobile ? 0 : (register ? -200 : 200) }),
    };

    return {
        register,
        handlerRegister,
        containerVariants,
        formVariants,
        isMobile
    };
}