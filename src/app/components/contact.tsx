import Image from "next/image";
import vector from "@/app/public/Vector.svg"

export default function Cnt () {
    return( 
    <section className="h-full w-full">
      <div className="text-center p-10">
        <h1 className="text-white text-4xl font-extrabold mb-5">Get In Touch</h1>
        <p className="text-sm text-primary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
         eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <header className="">
        {/* Email */}
        <label className="ml-80  text-white pb-1">Email</label> <br />
        <input
        type="email"
        className="ml-80 w-[39ch] py-2 text-sm rounded-sm pl-2"
        maxLength={38}
        id="email"
        placeholder="please enter your email here" 
        required /> <br /> <br />
        {/* mob */}
        <label  className="ml-80 text-white pt-5 pb-1">Mobile</label> <br />
        <input
        className="ml-80 pr-32 py-2 text-sm rounded-sm pl-2"
        autoComplete="off"
        type="tel"
        maxLength={11}
        id="phone number"
        placeholder="Enter mobile"
        required  /> <br /> <br />
        
        {/* message */}
        <label  className="ml-80 text-white pt-5  ">Message</label> <br /> 
        <textarea
        className="   text-left ml-80 text-sm rounded-md pl-2"
        id="message"
        cols={43}
        rows={5}
        placeholder="Enter your message"
        maxLength={250} 
        required /> 

      <div className="ml-[34%] pt-5 pb-5">
            <button className="bg-secondary text-white text-sm py-4 px-28  flex  items-center justify-center gap-4 rounded-md ">
                Submit
                <Image src={vector} alt="Vector svg" width={5} height={10}/>
            </button>
        </div>
        
      </header>
        <div className="w-full h-full p-2  bg-[#1B1B1B] bg-opacity-100 ">
            <p className="ml-[45%] text-primary ">  Made with ❤️</p>
        </div>
    </section>
    );
};