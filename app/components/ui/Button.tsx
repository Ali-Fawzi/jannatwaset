import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import clsx from 'clsx';

import {missingClass} from '~/lib/utils';

export const Button = forwardRef(
    (
        {
            as = 'button',
            className = '',
            variant = 'primaryYellow',
            width = 'auto',
            baseButtonClasses = 'inline-block rounded-full font-semibold text-center py-3 px-9',
            ...props
        }: {
            as?: React.ElementType;
            className?: string;
            baseButtonClasses?: string;
            variant?: 'primaryYellow' |'primaryGreen' | 'secondary' | 'inline';
            width?: 'auto' | 'full';
            [key: string]: any;
        },
        ref,
    ) => {
        const Component = props?.to ? Link : as;

        const variants = {
            primaryYellow: `${baseButtonClasses} bg-yellow text-black hover:bg-darkYellow animate-smooth select-none`,
            primaryGreen: `${baseButtonClasses} bg-green text-white hover:bg-green2 animate-smooth select-none`,
            secondary: `${baseButtonClasses} bg-white text-darkGreen hover:bg-darkGreen hover:text-white animate-smooth select-none border-2 border-darkGreen`,
            secondaryWhite: `${baseButtonClasses} bg-white/0 text-white hover:bg-white hover:text-orange-400/80 animate-smooth select-none border-2 border-white`,
            secondaryBlack: `${baseButtonClasses} bg-white/0 text-black hover:bg-white hover:text-orange-400/80 animate-smooth select-none border-2 border-black hover:border-white`,
            secondaryGreen: `${baseButtonClasses} bg-white/0 text-green hover:bg-green hover:text-white animate-smooth select-none border-2 border-green`,
            inline: 'border-b border-primary/10 leading-none pb-1',
        };

        const widths = {
            auto: 'w-auto',
            full: 'w-full',
        };

        const styles = clsx(
            missingClass(className, 'bg-') && variants[variant],
            missingClass(className, 'w-') && widths[width],
            className,
        );

        return (
            <Component
                className={styles}
                {...props}
                ref={ref}
            />
        );
    },
);