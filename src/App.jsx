import Nav from "./components/Nav";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Products from "./components/Products";
import Marques from "./components/Marques";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

const App = () =>{
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full font-[satoshi_variable]  bg-zinc-900 text-white">
        <Nav/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marques/>
        <Cards/>
        <Footer/>
      </div>  
    </>
  )
}
export default App;