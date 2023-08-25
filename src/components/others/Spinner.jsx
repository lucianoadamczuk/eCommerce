import { Triangle } from "react-loader-spinner"

export const Spinner = () => {
    return(
        <Triangle
            height="100"
            width="100"
            color="#4f46e5"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}