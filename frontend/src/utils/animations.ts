import { HTMLMotionProps } from 'framer-motion';

export const blowUpAnimation: HTMLMotionProps<"div"> = {
    initial: {
        transform: `scale(0)`
    },
    animate: {
        transform: `scale(1)`
    },
    exit: {
        transform: `scale(0)`
    }
}

export const fadeInAnimation = {
    initial: {
        opacity: 0,
        transform: "translateY(30px)",
    },
    animate: {
        opacity: 1,
        transform: "translateY(0)",
    },
    exit: {
        opacity: 0,
        transform: "translateY(30px)",
    },
}
