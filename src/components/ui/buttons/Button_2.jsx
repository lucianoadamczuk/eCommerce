export const Button_2 = ({onClick, dark, small, text}) => {
    return(
        <button className={
                ` 
                    w-full md:w-fit  rounded-xl  
                    shadow-md shadow-muted hover:scale-95 hover:shadow-none
                    ${dark && "bg-dark"} 
                    ${small ? "m-1 px-2 py-1 " : "m-2 px-5 py-2"} 
                `  
            } onClick={onClick}>

            <p className={
                ` 
                    uppercase  
                    ${dark === true ? "text-primary" : "text-dark " } 
                    ${small ? "text-xs" : "text-md"} 
                `
            } > {text} </p>   
            
        </button>
    )
}