const IntroCard = () => {
  return (
    <div className="relative w-full max-w-4xl"> {/* Increase max width */}
      <img src="intro-card-base.svg" alt="" className="w-full h-auto" /> {/* Make image take full width */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="!font-poppins pl-17 pb-10 text-white text-8xl font-bold">Nicole Lee</h1>
      </div>
    </div>
  )
}

export default IntroCard