import Image from "next/image"
import Vector from "@/app/public/Vector.svg"
import hero from "@/app/public/DAIM.jpg"
import logo1  from "@/app/public/Logo 1.svg"
import logo2  from "@/app/public/Logo 2.svg"
import logo3  from "@/app/public/Logo 3.svg"
import logo4  from "@/app/public/Logo 4.svg"
import logo5  from "@/app/public/Logo 5.svg"
export default function Hero (){
    return(
        <section className="h-screen w-full flex items-center flex-col  mt-10 gap-14">
            <div className="flex items-center  justify-between  w-full">
                <div className="flex-1 flex flex-col gap-10 items-start">                                {/* left corner */}
                    <h1 className="text-5xl font-extrabold text-white">
                        DAIM IMRAN 
                    </h1>
                    <p className="text-sm text-[#9C9C9C]  ">
                    I am a dedicated developer skilled in [your expertise, e.g., web or app development], creating innovative and user-friendly solutions. I strive to bring ideas to life through clean, efficient code.
                    </p>
                    <button className="bg-[#3F8E00] px-8 py-4  text-[#FFFFFF] text-sm font-bold flex  items-center justify-center gap-3 ">
                    Let’s get started  <Image src={Vector} alt="Vector svg" width={5} height={10}/>
                    </button>
                </div>
                <div className="">                                {/*Right corner  */}
                    <Image src={hero} alt="Hero image" width={350} height={350} className="rounded-full h-[300px] w-[300px]"/>
                </div>
            </div>
            <div className="text-white flex flex-col items-start gap-5">
                work with 
             <div className="flex items-center gap-3 ">                                         {/*LOGOS  */}
             <Image src={logo1} alt="logo1" height={60} width={160}/>
             <Image src={logo2} alt="logo2" height={60} width={160}/>
             <Image src={logo3} alt="logo3" height={60} width={160}/>
             <Image src={logo4} alt="logo4" height={60} width={160}/>
             <Image src={logo5} alt="logo5" height={60} width={160}/>
            </div>
            </div>
        </section>
    )
}