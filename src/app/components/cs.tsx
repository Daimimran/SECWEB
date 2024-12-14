import Image from "next/image"
import vector from "@/app/public/Vector.svg"
import work1  from "@/app/public/Mask group.svg"
import work2  from "@/app/public/Mask group (1).svg"
import work3  from "@/app/public/Mask group (2).svg"


export default function CaseStudies (){
    return(
        <section className="h-full w-full flex flex-col  items-center gap-10 bg-white">
            <div className="text-center flex flex-col gap-4">
                <h1 className="text-3xl font-extraboldbold  text-black mt-3">Case Studies</h1>
                <p className="text-primary">Solving user & business problems since last 15+ years <br />
                    .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <header className="flex  items-center gap-20">
                <div className="flex flex-col gap-5 items-start">
                    <h6 className="text-sm text-[#FFA217] font-bold">Fintech</h6>
                     <h1 className="text-black font-extrabold text-2xl">Falana</h1>
                     <p className="text-primary">Lorem ipsum dolor sit amet, consectetur <br />
                      adipiscing elit, sed do eiusmod tempor incididunt <br />
                       ut labore et dolore magna aliqua. sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna.</p>
                        <button className="bg-[#FFA217] px-16 py-2  text-[#FFFFFF] text-sm font-bold flex  items-center justify-center gap-3 ">
                    View case study  <Image src={vector} alt="Vector svg" width={5} height={10}/>
                    </button>
                </div>
                <div>
                    <Image src={work1} alt="mask group" height={300} width={445}/>
                </div>
            </header>
            <main className="flex  items-center gap-20">
                <div>
                    <Image src={work2} alt="mask group" height={300} width={445}/>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h6 className="text-sm text-[#000AFF] font-bold">EdTech</h6>
                     <h1 className="text-black font-extrabold text-2xl">Dhamaka</h1>
                     <p className="text-primary">Lorem ipsum dolor sit amet, consectetur <br />
                      adipiscing elit, sed do eiusmod tempor incididunt <br />
                       ut labore et dolore magna aliqua. sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna.</p>
                        <button className="bg-[#000AFF] px-16 py-2  text-[#FFFFFF] text-sm font-bold flex  items-center justify-center gap-3 ">
                    View case study  <Image src={vector} alt="Vector svg" width={5} height={10}/>
                    </button>
                </div>
            </main>
            <footer className="flex  items-center gap-20">
                <div className="flex flex-col gap-5 items-start">
                    <h6 className="text-sm text-[#2AB090] font-bold">Pharma</h6>
                     <h1 className="text-black font-extrabold text-2xl">alabala</h1>
                     <p className="text-primary">Lorem ipsum dolor sit amet, consectetur <br />
                      adipiscing elit, sed do eiusmod tempor incididunt <br />
                       ut labore et dolore magna aliqua. sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna.</p>
                        <button className="bg-[#2AB090] px-16 py-2  text-[#FFFFFF] text-sm font-bold flex  items-center justify-center gap-3 ">
                    View case study  <Image src={vector} alt="Vector svg" width={5} height={10}/>
                    </button>
                </div>
                <div>
                    <Image src={work3} alt="mask group" height={300} width={445} className="pb-5"/>
                </div>
            </footer>
            
        </section>
    )
}