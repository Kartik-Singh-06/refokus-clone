import { data } from "autoprefixer";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";

const Work = () => {
 const [images,setImages] = useState([

  {url:"https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "50%",
                left:"50%",
              isActive: false},
  {url:"https://images.unsplash.com/photo-1682685797818-c9dc151d241e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "55%",
                left:"40%",
              isActive: false},
  {url:"https://images.unsplash.com/photo-1705615427885-800da48ba0b7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "45%",
                left:"58%",
              isActive: false},
  {url:"https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "65%",
                left:"49%",
              isActive: false},
  {url:"https://plus.unsplash.com/premium_photo-1682125199596-acf7267a347c?q=80&w=1103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "62%",
                left:"60%",
              isActive: false},
  {url:"https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
                top: "81%",
                left:"42%",
              isActive: false},
          
          ] )
  

//animation on images when scrolling down.
 const {scrollYProgress,scrollY , scrollX ,scrollXProgress}=useScroll();

 scrollYProgress.on("change",(data)=>{
 
  function showImages(arr){
    setImages(prev =>(
      prev.map((item,index)=>(
        arr.indexOf(index)=== -1 ? ({
          ...item , isActive : false
        }):(
          {
            ...item , isActive : true
          }
        )
      ))
    ))
  }

 switch(Math.floor(data * 100)){
   case 0: 
   showImages([]);
      break;
   case 1: 
   showImages([0]);
      break;
   case 2: 
      showImages([0,1]);
      break;
   case 3: 
      showImages([0,1,2]);
      break;
   case 4: 
      showImages([0,1,2,3]);
      break;
   case 6: 
      showImages([0,1,2,3,4]);
      break;
   case 8: 
      showImages([0,1,2,3,4,5]);
      break;
 }
})


  return (
    <>
      <div className="w-full  ">
        <div className="relative max-w-screen-xl mt-4 text-center mx-auto ">
        <h1 className="text-[27vw] font-medium select-none leading-none">work</h1>
        <div className="absolute top-0 w-full h-full">
        
        {images.map((item,index)=>(item.isActive && <img className=" absolute -translate-x-[50%] -translate-y-[50%] w-60 h-52 rounded-lg object-cover " style={{top:item.top,left:item.left}} key={index} src={item.url}/>))}
        </div>
        </div>
        </div>
    </>
  )
}

export default Work