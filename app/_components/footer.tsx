import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return(
        <footer className={"w-full h-24 bg-white dark:bg-slate-800 flex justify-between items-center bottom-0"}>
            <div className={"ml-5"}>
                Folk Impressions
            </div>
            <div className={"flex space-x-5 mr-5"}>
                <Link href={"/"}>
                    <AiFillFacebook size={50} className={"rounded-full"}/>
                </Link>
                <Link href={"/"}>
                    <AiFillInstagram size={50} className={"rounded-full"}/>
                </Link>
                <Link href={"/"}>
                    <AiFillLinkedin size={50} className={"rounded-full"}/>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;