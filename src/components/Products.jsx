import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let obj = [
    {
      title: "Ariqitel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium. ",
      live: true,
      case: false,
    
    },
    {
      title: "TTR",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium. ",
      live: true,
      case: false,
  
    },
    {
      title: "YIR 2022",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium. ",
      live: true,
      case: true,
   
    },
    {
      title: "Yahoo",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium. ",
      live: true,
      case: true,
    
    },
    {
      title: "Rainfall",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nulla praesentium. ",
      live: true,
      case: false,
    
    },
  ];

  const [data, setData] = useState(obj);
  const [position, setPosition] = useState(0);

  const mover = (val) => {
    setPosition(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {data.map((items, index) => (
        <Product key={index} mover={mover} count={index} value={items} />
      ))}
      <div className="absolute pointer-events-none top-0  w-full h-full">
        <motion.div
          initial={{ y: position }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="w-[32rem] h-[23rem] absolute  left-[28%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="w-full h-full "
          > <video autoPlay muted loop src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="w-full h-full "
          > <video autoPlay muted loop src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"></video></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="w-full h-full overflow-hidden"
          >
             <video autoPlay muted loop  src="https://cdn.refokus.com/website/2022/videos/rainfall.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
            className="w-full h-full rounded-xl"
          > <video autoPlay muted loop  src="https://cdn.refokus.com/website/2022/videos/Silvr.webm"></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
