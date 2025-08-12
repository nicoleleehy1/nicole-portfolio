const AboutMe = () => {
  return (
    <div className='relative pt-20 pl-10'>
        <img src="about-me-blank.svg" alt="" className="w-full h-auto" />
              {/* Text Overlay (mimics GIF positioning) */}
      <div
        className="
          absolute
          w-[70%]         /* same scale as GIF */
          max-w-[60rem]   /* prevent too large */
          left-[17%]      /* match horizontal GIF offset */
          top-[38%]      /* match vertical GIF offset */
          flex flex-col
          text-left
        "
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#B61E1D]">
          About Me.
        </h1>
        <p className="!font-poppins mt-2 text-[#000000] pl-1 rounded">
        I’m a second-year Electrical Engineering & Computer Science (EECS) and Bioengineering double major at UC Berkeley, passionate about building software that drives social impact. With experience in full-stack development, I love creating solutions that bridge technology and real-world needs.        </p>
      </div>
    </div>
  )
}

export default AboutMe