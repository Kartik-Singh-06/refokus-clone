import Card from "./Card";


const Cards = () => {
  return (
    <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-20 flex justify-center gap-4 items-center  ">

            <Card width = {"w-2/5"} padd={"10px"}  start={false} para={true}  />
            <Card width = {"w-3/5"} padd={"10px"} start={true} para={false} hover="true" />
        </div>
    </div>
  )
}

export default Cards;