export const defaultAnimationWithTransform = {
    initial: {
        opacity: 0,
        scale: 0.6,
        x: "-50%", // Only this way -transform-x-1/2 works
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: "-50%",
    },
    transition: {
        duration: 0.4,
        type: "spring",
        bounce: 0.5,
    },
};

export const defaultAnimation = {
    initial: {
        opacity: 0,
        scale: 0.6,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        duration: 0.4,
        type: "spring",
        bounce: 0.5,
    },
};

export const slideAnimation = {
    initial: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    }),
    animate: {
        x: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    }),
};
