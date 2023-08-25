import { Icon_arrow } from "../../../icons"

export const Button = ({text}) => {


    return(
        <button className={`w-fit py-2 px-7 m-2 flex items-center bg-light shadow-md shadow-dark cursor-pointer space-x-2 hover:space-x-6 `} >
            <p className=" text-sm font-bold uppercase tracking-widest "> {text} </p>
            <Icon_arrow/>
        </button>
    )
}