import Image from "next/image"
import rw1 from "@/app/public/Mask group (3).svg"
import rw2 from "@/app/public/Mask group (4).svg"
import vector from "@/app/public/Vector.svg"


export default function ResentWork () {
    return(
        <section className="bg-white h-full  ">
       <div className="text-center p-10">
        <h1 className="text-4xl font-extrabold ">Recent Work</h1>
        <p className="text-primary text-sm pt-5">Solving user & business problems since last 15+ years. <br />
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> 
         eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
       </div>

       <main className="flex justify-between mx-10  mt-5">
        <header>
            <div className="flex gap-5 items-center">
                <Image src={rw1} alt="mask group" height={300} width={400}/>

            </div>
            <div className="flex flex-col items-start gap-4">                
                <h6 className="text-2xl font-extrabold pt-5">FALANA</h6>
                <p className="text-sm text-primary">Labore et dolore magna aliqua. sed do eiusmod <br />
                 tempor incididunt ut labore et dolore magna.</p>
                 <button className="bg-secondary text-white px-6 py-3  text-sm   flex  items-center justify-center gap-4 ">
                    Know more  <Image src={vector} alt="Vector svg" width={5} height={10}/>
                </button>
            </div>
        </header>
        <footer>
            <div className="flex gap-5 items-center">
                <Image src={rw2} alt="mask group" height={300} width={400}/>

            </div>
            <div className="flex flex-col items-start gap-4">                
                <h6 className="text-2xl font-extrabold pt-5">DHAMAKA</h6>
                <p className="text-sm text-primary">Rempor incididunt ut labore et dolore magna <br />
                 aliqua. sed do eiusmod tempor incididunt u</p>
                 <button className="bg-secondary text-white px-6 py-3  text-sm   flex mb-5 items-center justify-center gap-4 ">
                    Know more  <Image src={vector} alt="Vector svg" width={5} height={10}/>
                </button>
            </div>
        </footer>
       </main>
        </section>
    )
}