export function missingClass(string?: string, prefix?: string) {
    if (!string) {
        return true;
    }

    const regex = new RegExp(` ?${prefix}`, 'g');
    return string.match(regex) === null;
}

export const animationVariants = {
    visible: (delay: number = 0) =>({
        opacity: 1,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        },
    }),
    hidden: (delay: number = 1) =>({
        opacity: 0,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        }
    }),
    correctY: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        },
        y: 0,
    }),
    correctX: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        },
        x: 0,
    }),
    correctScale: (delay: number = 0) =>({
        opacity: 1,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        },
        scale: 1,
    }),
    shrink: (delay: number = 0) =>({
        scale: 0.25,
        opacity: 0,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        }
    }),
    dive: (delay: number = 0) =>({
        y: 72,
        opacity: 0,
        transition: {
            duration: 0.5,
            easing: 'ease-in-out',
            delay: delay * 0.25,
        }
    }),
}