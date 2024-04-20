import Button from "./Button"
function Nav() {
  return (
    <>
     
     <div className="max-w-screen-xl flex py-6 mx-auto items-center justify-between border-b-[1px]  border-zinc-700">
    <div className="nav-left flex ">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
         <div className="flex   items-center gap-10 ml-20">
           {["Home","Culture","Work" , "" , "News"].map((item,index) =>(
            item.length === 0? <span key={index} className="w-[2px] h-7 bg-zinc-700"></span> : <a className="text-sm " key={index} href="#">
            {index === 1 && <span style={{boxShadow : " 0 0 0.45em #00FF19"}} className="w-1   mr-2 h-1 align-middle  bg-green-500 rounded-full inline-block"></span>}
            {item}
            </a>))} 
         </div>
         </div>
      <Button/>
      </div>

    </>
  )
}

export default Nav