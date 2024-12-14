import Image from "next/image"
import Client1 from "@/app/public/Client photo 1.svg"
import Client2 from "@/app/public/Client photo 2.svg"
import Client3 from "@/app/public/Client photo 1 (1).svg"
import Client4 from "@/app/public/Client photo 2 (1).svg"
export default function Test () {
 return (
    <section className="flex flex-col items-center gap-12">
        <div className="text-white text-center mt-3 flex flex-col gap-4">
            <h1 className="font-extrabold text-4xl">Testimonials</h1>
            <p className="text-sm text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
             eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

    <header className="flex justify-between w-[90%] pl-16">
        <div className="border border-gray-700 rounded-xl py-5 px-10 flex flex-col gap-5">
            <p className="text-primary text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex items-center justify-start gap-5">
            <Image src={Client1} alt="monjulika" />
            <span className="text-white">MonJuliKa</span>
        </div>
        </div>
        <div className="border border-gray-700 rounded-xl py-5 px-10 flex flex-col gap-5 ">
            <p className="text-primary text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex items-center justify-start gap-5">
            <Image src={Client2} alt="monjulika ka aashiq" />
            <span className="text-white text-lg font-bold ">MonJuliKa ka Aashiq</span>
        </div>
        </div>
    </header>

    <footer className="flex justify-between w-[90%] pl-16 pb-5">
        <div className="border border-gray-700 rounded-xl py-5 px-10 flex flex-col gap-5">
            <p className="text-primary text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex items-center justify-start gap-5">
            <Image src={Client3} alt="GOPI BAHU" />
            <span className="text-white">GoPi BaHu</span>
        </div>
        </div>
        <div className="border border-gray-700 rounded-xl py-5 px-10 flex flex-col gap-5 ">
            <p className="text-primary text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex items-center justify-start gap-5">
            <Image src={Client4} alt="GOPI ki dost" />
            <span className="text-white">GOpi ki DOST</span>
        </div>
        </div>
    </footer>
        
    </section>
 )
}