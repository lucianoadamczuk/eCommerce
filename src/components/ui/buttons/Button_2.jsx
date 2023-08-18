export const Button_2 = ({dark, text}) => {
    return(
        <button className={` w-full md:w-fit m-2 px-5 py-2 rounded-xl  ${dark && "bg-dark"} shadow-md shadow-muted hover:scale-95 hover:shadow-none `  }>
            <p className={` ${dark === true ? "text-primary" : "text-dark" } `} > {text} </p>   
        </button>
    )
}