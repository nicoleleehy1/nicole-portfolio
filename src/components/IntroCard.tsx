const IntroCard = () => {
  return (
    <div className="relative max-w-[62.5rem] w-full">
      {/* Background SVG */}
      <img src="intro-card-base.svg" alt="" className="w-full h-auto" />

      {/* Animated Signature Overlay */}
      <div className="absolute inset-0">
        <img
          src="animated_signature.gif"
          alt="Animated Signature"
          className="
            absolute
            pointer-events-none
            w-[90%]      // Resize with container
            max-w-[60rem] // Prevent it from getting too big
            left-[15%]   // Responsive horizontal position
            top-[-12%]    // Responsive vertical position
          "
        />
      </div>
    </div>
  )
}


export default IntroCard