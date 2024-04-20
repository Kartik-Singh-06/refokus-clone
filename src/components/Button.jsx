import { BsArrowReturnRight } from "react-icons/bs";
function Button({title ="Get Started"}) {
  return (
   <>
      <div className="w-40 px-5 cursor-pointer py-2 rounded-full flex items-center justify-between bg-zinc-100 text-black" >
        <span className="text-sm font-medium ">
            {title}
        </span>
        <BsArrowReturnRight/>
      </div>
   </>
  )
}

export default Button