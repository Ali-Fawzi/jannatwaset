export function missingClass(string?: string, prefix?: string) {
    if (!string) {
        return true;
    }

    const regex = new RegExp(` ?${prefix}`, 'g');
    return string.match(regex) === null;
}

export const animationVariants = {
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            easing: 'ease-in-out',
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 1,
            easing: 'ease-in-out',
        }
    },
    correctY: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 1,
            easing: 'ease-in-out',
            delay: delay * 0.5,
        },
        y: 0,
    }),
    correctX: (delay: number = 0) => ({
        opacity: 1,
        transition: {
            duration: 1,
            easing: 'ease-in-out',
            delay: delay * 0.5,
        },
        x: 0,
    }),
    correctScale: (duration: number = 1) =>({
        opacity: 1,
        transition: {
            duration: duration,
            easing: 'ease-in-out',
        },
        scale: 1,
    }),
}