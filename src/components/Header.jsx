
import { UtensilsCrossed } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F5EF]/95 backdrop-blur-lg border-b border-[#173B32]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#173B32] text-[#D7BB87] flex items-center justify-center">
            <UtensilsCrossed size={21} />
          </div>

          <div>
            <h1 className="font-display text-xl font-bold tracking-wide text-[#173B32]">
              WONDERLAND
            </h1>
            <p className="text-[10px] tracking-[2px] uppercase text-[#9A8158]">
              Hotel & Resort
            </p>
          </div>
        </div>

        <a
          href="#menu"
          className="bg-[#173B32] text-white hover:bg-[#245447] px-5 py-2.5 rounded-full text-sm font-medium transition duration-300 hover:shadow-lg"
        >
          Explore Menu <span className="text-[#D7BB87]">↗</span>
        </a>

      </div>
    </header>
  )
}
