import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from "framer-motion";
const Card = ({ width, start,padd, para,hover="false" }) => {
  return (
    <>
      <motion.div whileHover={{backgroundColor : hover === "true" && "#7443ff" ,padding : "25px"}} className={`${width} ${padd} rounded-xl  bg-zinc-800 h-[30rem] flex flex-col justify-between`}>
        <div className="w-full">
          <div className="w-full flex px-2 items-center justify-between">
            <h1>one heading</h1>
            <FaArrowRightLong />
          </div>
          <h1 className="text-3xl px-2 font-medium mt-10">Who we are</h1>
        </div>
        <div className="down px-5 pb-3 w-full mt-60">
          {start === true && (
            <>
              <h1 className="text-5xl font-semibold tracking-tight leading-none">
                Start Project
              </h1>
              <button className=" px-5 border-[1px] mt-5 text-semibold border-zinc-300 rounded-full ">
                Contact us
              </button>
            </>
          )}
          {para && (
            <>
              <p className="text-sm font-medium text-zinc-500 ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};
export default Card;
