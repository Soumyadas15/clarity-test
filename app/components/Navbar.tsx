interface NavbarProps {
    label1: string;
    label2: string;
}

export const Navbar = ({
    label1,
    label2
}: NavbarProps) => {
    return (
        <div className="fixed bg-neutral-300 h-[4rem] w-screen font-semibold flex items-center pl-5 text-xl pr-5 justify-between">
            <div>
                {label1}
            </div>
            <div className="font-light text-md">
                {label2}
            </div>
        </div>
    )
}