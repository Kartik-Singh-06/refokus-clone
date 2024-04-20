import Button from "./Button";


 const Product = ({value,mover,count})=>{
    const {title , desc} = value;
  return (
   
        <div className=" w-full h-[23rem] py-16  text-white ">
        <div onMouseEnter={()=>(mover(count))} className={`max-w-screen-xl cursor-pointer mx-auto flex justify-between items-center`  } >
               <h1 className="text-6xl capitalize font-semibold">{title}</h1>
               <div className=" w-1/3">
               <p className=" mb-10">{desc}</p>

              <div className="flex items-center gap-5">
              {value.live && <Button/>}
             {value.case  && <Button title = "Case Study"/>}
              </div>
            </div>
        </div>
        </div>
  )
}

export default Product;