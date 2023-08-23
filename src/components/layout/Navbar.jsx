import { useEffect, useState } from "react"
import { Icon_menu, Icon_user } from "../../icons"
import { NavLink } from "react-router-dom"


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState()

    function openMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth >= 768){
                setIsMenuOpen(true)
            } else{
                setIsMenuOpen(false)
            }
        } 

        window.addEventListener("resize", handleResize)

    }, [])


    return(
        <nav className=" w-full bg-light fixed z-50">

            <div className=" py-1 bg-dark">

                hhh

            </div>

            <section className=" my-2 py-4 bg-white">

                <div className=" flex justify-around        md:container">

                    <div className=" md:hidden" onClick={() => openMenu()} >
                        <Icon_menu/>
                    </div>

                    <NavLink to="/">
                        <p className="  uppercase text-secondary">gilgamesh</p>
                    </NavLink>
                    

                    <div className={` ${isMenuOpen? "flex" : "hidden"} w-full absolute py-6 left-0 top-24 flex flex-col justify-center items-center space-y-6 text-center bg-dark text-light bg-opacity-80 backdrop-blur-sm         md:py-0 md:static md:flex md:flex-row md:bg-white md:text-dark md:space-y-0 md:space-x-6 `}>
                        
                        <NavLink to="showroom/men">
                            <p className=" px-4 uppercase tracking-widest cursor-pointer       hover:bg-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Men</p>
                        </NavLink>
                        
                        <NavLink to="showroom/women">
                            <p className=" px-4 uppercase tracking-widest cursor-pointer       hover:bg-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Women</p>
                        </NavLink>
                        
                        <NavLink to="showroom/youngs">
                            <p className=" px-4 uppercase tracking-widest cursor-pointer       hover:bg-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Childrens</p>
                        </NavLink>
                        
                    </div>

                    <div className=" flex space-x-2">

                        <Icon_user/>

                    </div>

                </div>

            </section>

        </nav>
    )
}