
import { MapPin, Phone, UtensilsCrossed } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#173B32] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">

        {/* Hotel Branding */}
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center justify-center gap-2 mb-3">
            <UtensilsCrossed
              size={22}
              className="text-[#D7BB87]"
            />

            <h2 className="font-display text-2xl tracking-[3px]">
              WONDERLAND
            </h2>
          </div>

          <p className="text-[#D7BB87] text-xs tracking-[4px] uppercase">
            Hotel & Resort
          </p>

          <div className="w-12 h-[2px] bg-[#C5A46D] mt-5" />

          {/* Thank You Message */}
          <p className="font-amharic text-sm md:text-base text-stone-200 mt-5">
            ስለጎበኙን እናመሰግናለን!
          </p>

          <p className="text-sm text-stone-300 mt-2">
            We look forward to serving you again.
          </p>

          <p className="font-amharic text-xs text-stone-400 mt-2">
            እንደገና ለማገልገልዎ በደስታ እንጠብቃለን።
          </p>

        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 mt-8">

          <div className="flex items-center gap-3 text-sm text-stone-300">
            <MapPin size={18} className="text-[#D7BB87]" />

            <span>Harar, Ethiopia</span>
          </div>

          <a
            href="tel:+251986008313"
            className="flex items-center gap-3 text-sm text-stone-300 hover:text-[#D7BB87] transition-colors"
          >
            <Phone size={18} className="text-[#D7BB87]" />

            <span>+251 986 008 313</span>
          </a>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/15 mt-9 pt-5 text-center">

          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Wonderland Hotel & Resort.
            All rights reserved.
          </p>

          <p className="text-[11px] text-stone-500 mt-2">
            Made with care for a better dining experience.
          </p>

        </div>

      </div>
    </footer>
  )
}
