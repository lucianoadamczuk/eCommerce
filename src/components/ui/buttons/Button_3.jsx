export const Button_3 = ({dark, onClick, text}) => {
    return(
        <button className={` mx-1 px-2 py-1 shadow-md shadow-muted rounded-md hover:shadow-none hover:scale-90 ${dark && "bg-dark"}`} onClick={onClick}>
            <p className={`text-sm ${dark && "text-primary"}`}>{text}</p>
        </button>
    )
}