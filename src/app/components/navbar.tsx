import Image from "next/image"
import Link from "next/link"
import  Twitter  from "../public/Twitter.svg"
import  LinkedIn  from "../public/LinkedIn.svg"
import   Behance from "../public/Behance.svg"




export default function Navbar () {
    return(
        <nav className=" bg-[#1B1B1B] px-12 py-5 flex items-center justify-between gap-28">
            <div className="flex items-center justify-between flex-1 ">
                <Link href={"/"} className=" text-[#9C9C9C] text-sm font-normal hover:text-white">Home</Link>
                <Link href={"/dashboard/casestudies"} className=" text-[#9C9C9C] text-sm font-normal hover:text-white">Case Studies</Link>
                <Link href={"/dashboard/testinomial"} className=" text-[#9C9C9C] text-sm font-normal hover:text-white">Testimonials</Link>
                <Link href={"/dashboard/recentwork"} className=" text-[#9C9C9C] text-sm font-normal hover:text-white">Recent Work</Link>
                <Link href={"/dashboard/getintouch"} className=" text-[#9C9C9C] text-sm font-normal hover:text-white">Get in touch</Link>
            </div>
           <div className="flex items-center justify-center gap-3 ">
        
        <Link href={"https://www.linkedin.com/in/daim-imran-584433290/"}><Image alt="twitter logo" width={18} height={18} src={LinkedIn}/></Link>
        <Link href={""}><Image alt="twitter logo" width={18} height={18} src={Behance}/></Link>
        <Link href={"https://x.com/Daimimran347489"}><Image alt="twitter logo" width={18} height={18} src={Twitter}/></Link>
    </div>

            
            
        </nav>
    )
}