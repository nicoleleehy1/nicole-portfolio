import ScrollingGallery from "./ScrollingGallery"

const Highlights = () => {
  return (
    <div className='items-center flex flex-col gap-7'>
        <h1 className="!font-poppins text-5xl text-white font-extrabold">Here are some highlights!</h1>
        <ScrollingGallery />
    </div>
  )
}

export default Highlights