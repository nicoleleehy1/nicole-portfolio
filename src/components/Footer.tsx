import { siteMeta } from "../lib/siteMeta";

export default function Footer(){
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-white flex justify-between gap-10">
        <span>© {new Date().getFullYear()} {siteMeta.name}</span>
        <span>
          <a href={siteMeta.linkedin} target="_blank" className="mr-4 hover:underline">LinkedIn</a>
          <a href={siteMeta.github} target="_blank" className="hover:underline">GitHub</a>
        </span>
      </div>
    </footer>
  );
}
