const IntroCard = () => {
  return (
    <div className="relative max-w-[1000px]"> {/* Increase max width */}
      <img src="intro-card-base.svg" alt="" className="w-full h-auto" /> {/* Make image take full width */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="!font-poppins pl-24 pb-8 text-white text-8xl font-bold">Nicole Lee</h1>
      </div>
    </div>
  )
}

export default IntroCard