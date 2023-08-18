import { Icon_facebook, Icon_instagram, Icon_tiktok, Icon_youtube } from "../../icons"

export const Footer = () => {
    return(
        <footer className=" mt-10">

            <div className=" py-5 flex justify-center  bg-dark">
                <p className="text-secondary uppercase">Gilgamesh</p>
            </div>

            <section className=" container py-10 grid grid-cols-2 lg:grid-cols-4 text-muted">

                <div>
                    <b className=" text-dark uppercase">Account</b>
                    <p>Log in</p>
                    <p>Sign Up</p>
                </div>

                <div>
                    <b className=" text-dark uppercase">Contact</b>
                    <p>Work with us</p>
                    <p>Contact us</p>
                    <p>Open your franchise</p>
                </div>

                <div>
                    <b className=" text-dark uppercase">About</b>
                    <p>Who we are</p>
                    <p>Promotions</p>
                    <p>Frequent questions</p>
                </div>

                <div>
                    <b className=" text-dark uppercase">Follow us</b>
                    <div className="flex gap-2">
                        <Icon_facebook/>
                        <Icon_instagram/>
                        <Icon_tiktok/>
                        <Icon_youtube/>
                    </div>
                </div>
            </section>

            <section className=" container flex flex-wrap justify-center gap-5">
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
                <p>Promotions policy</p>
                <p>Consumer defense</p>
                <p>Deliveries</p>
            </section>

            <div className=" container pt-10 pb-5 flex justify-end">
                <p className=" text-sm"> Copyright 2023 © GILGAMESH 1980-2023</p>
            </div>

        </footer>
    )
}