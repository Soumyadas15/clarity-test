interface ButtonProps {
    label: string;
    bgColor: string;
    border: string;
}

export const Button = ({
    label,
    bgColor,
    border
}: ButtonProps) => {

    return (
        <button 
            onClick={() => console.log(`${label} logged`)}
            className={`
                text-white
                font-semibold
                p-4
                w-[20rem]
                sm:w-[10rem]
                rounded-lg
                ${bgColor}
                border-[3px]
                ${border}
                hover:bg-opacity-75
                transition
            `}
        >
            {label}
        </button>
    )
}