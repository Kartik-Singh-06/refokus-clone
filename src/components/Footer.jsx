const Footer =()=>{
    return(
        <>
         <div className="w-full py-5">
            <div className="max-w-screen-xl mx-auto flex gap-52">
                <div className="basis-1/2">
                      <h1 className="text-[10vw] font-semibold tracking-tight pl-3 -leading-none">refokus.</h1>
                </div>
                <div className="basis-1/2 justify-center items-center flex gap-5 ">
                    <div className="basis-1/3">
                        <h4 className="text-lg text-zinc-400 mb-8">Social</h4>
                        {["instagram","twitter","linkedin"].map((item,index)=><a className="block mt-2 capitalize text-zinc-400" key={index}>{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-8 text-lg text-zinc-400">Sitemap</h4>
                        {["Home","Work","Careers"].map((item,index)=><a className="block mt-2 capitalize cursor-pointer text-zinc-100" key={index}>{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                    <p className="text-right text-sm"> Aspernatur iste blanditiis dolore nam, quaerat rerum tenetur quis aliquid, corporis unde, ad impedit saepe!</p>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
export default Footer;