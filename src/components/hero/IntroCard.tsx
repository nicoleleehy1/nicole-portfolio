import { siteMeta } from "../../lib/siteMeta"

export default function Hero() {
  return (
    <div className="relative max-w-[70rem]">
      {/* Background SVG */}
      <img
        src="/intro-card-base-2.svg"
        alt=""
        className="w-full h-auto"
      />

      {/* Text Overlay (mimics GIF positioning) */}
      <div
        className="
          absolute
          w-[70%]         /* same scale as GIF */
          max-w-[60rem]   /* prevent too large */
          left-[25%]      /* match horizontal GIF offset */
          top-[15%]      /* match vertical GIF offset */
          flex flex-col
          text-left
        "
      >
        <p className="mt-2 text-[#DC8282] font-bold">Hello! I'm</p>
        <h1 className="text-4xl md:text-8xl font-extrabold text-white">
          {siteMeta.name}
        </h1>
        <p className="!font-poppins mt-2 text-[#F9C6CF] pl-1 font-bold rounded">
              Electrical Engineering & Computer Science + Bioengineering <br /> @ UC Berkeley
            </p>
        
        {/* adjust the contact logos */}
        <div className="flex flex-row mt-6 pl-5 space-x-3">
          <div className="bg-white p-1 rounded-full">
            <a
              href={siteMeta.linkedin}
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/contacts-logo/linkedin.png"
                alt="linkedin-icon"
                width="25"
              />
            </a>
          </div>

          <div className="bg-white p-1 rounded-full">
            <a
              href={siteMeta.github}
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/contacts-logo/github.png"
                alt="github-icon"
                width="25"
              />
            </a>
          </div>

          <div className="bg-white p-1 rounded-full">
            <a
              href={`mailto:${siteMeta.email}`}
              className="underline"
            >
              <img
                src="/contacts-logo/gmail.png"
                alt="gmail-icon"
                width="25"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
