

export default function Stripe({val}) {
  return (
    <>
     <div className="w-[16.66%] px-3 border-zinc-700 py-4 border-b-[1.2px] border-r-[1.2px] flex justify-between items-center border-t-[1.2px]">
        <img className=" object-cover " src={val.url} alt="" />
        <span className="font-semibold">{val.num}</span>
     </div>
    </>
  )
}