import { twMerge } from "tailwind-merge";

const Link = ({ children, className }) => {
    return (
        <a 
            href="#" 
            className={twMerge(`
                no-underline 
                font-medium 
                text-m 
                hover:underline`,
                className
                )}
        >
            {children}
        </a>
    );
};

export default Link;