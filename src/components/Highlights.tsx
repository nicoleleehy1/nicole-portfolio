import ScrollingGallery from "./ScrollingGallery"

const Highlights = () => {
  return (
    <div className='items-center flex flex-col gap-7'>
        <h1 className="!font-poppins text-5xl text-white font-extrabold">Here are some highlights!</h1>
        <button className="!font-poppins w-[210px] h-[40px] bg-[#F9C6CF] rounded-[29.5px] text-center justify-start text-[#bd1f20] font-semibold">See All Experiences →</button>
        <ScrollingGallery />
    </div>
  )
}

export default Highlights