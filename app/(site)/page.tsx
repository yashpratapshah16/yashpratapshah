
import { Terminal } from "lucide-react"


export default function Home() {
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <div className="relative text-center z-10 max-w-4xl px-4">
        <Terminal className="w-16 h-16 mx-auto mb-8 animate-pulse text-green-400" />
        <h1 className="text-4xl md:text-7xl animate-glow tracking-tight mb-8 font-bold">
          <span className="text-green-400">
            Yashpratap
          </span>{" "}
          <span>
            Shah
          </span>
        </h1>
      </div>
    </div>
  );
}
