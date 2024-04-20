import { motion } from "framer-motion";

function Marque({ val, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0"}}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-10"
      >
        {val.map((item, index) => (
          <img src={item} className="" key={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-10"
      >
        {val.map((item, index) => (
          <img src={item} className="" key={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marque;
