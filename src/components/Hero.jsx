
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[280px] md:h-[340px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
        alt="Restaurant dining"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#102B24]/90 via-[#102B24]/60 to-black/20" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12">

        <div className="fade-up max-w-xl text-white">

          <p className="text-[#D7BB87] uppercase tracking-[3px] text-xs font-semibold">
            Welcome / እንኳን ደህና መጡ
          </p>

          <h2 className="font-display text-3xl md:text-5xl leading-tight mt-3">
            A Taste of
            <span className="text-[#D7BB87] italic ml-2">
              Something Special.
            </span>
          </h2>

          <p className="font-amharic text-lg md:text-xl text-[#F1E4CB] mt-3">
            ልዩ ጣዕምን ይቅመሱ
          </p>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 mt-5 bg-[#C5A46D] hover:bg-[#D7BB87] text-[#173B32] px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:gap-4"
          >
            View Our Menu
            <ArrowDown size={16} />
          </a>

        </div>
      </div>
    </section>
  )
}
