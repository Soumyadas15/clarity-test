interface ButtonProps {
    label: string;
    logString: string
    bgColor: string
}

export const Button = ({
    label,
    logString,
    bgColor
}: ButtonProps) => {
    return (
        <button 
            onClick={() => console.log(logString)}
        className={`

                p-4
                rounded-lg
                bg-${bgColor}
                border-[3px]
                border-${bgColor}
                hover:bg-opacity-75
                transition
            `}
        >
            {label}
        </button>
    )
}