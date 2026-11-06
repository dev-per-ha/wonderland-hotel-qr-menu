
export default function MenuCard({ item }) {
  return (
    <article className="food-card group bg-white rounded-2xl overflow-hidden border border-[#173B32]/10 shadow-sm">

      {/* Food Image */}
      <div className="h-56 overflow-hidden relative">

        <img
          src={item.image}
          alt={`${item.nameAm} - ${item.name}`}
          loading="lazy"
          className="food-image w-full h-full object-cover"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-[#173B32]/90 text-white text-xs px-3 py-2 rounded-full">
          {item.category}
        </span>

        {/* Price */}
        <span className="absolute bottom-3 right-3 bg-[#C5A46D] text-[#173B32] font-bold text-sm px-4 py-2 rounded-lg shadow-md">
          {item.price} ETB
        </span>

      </div>

      {/* Food Details */}
      <div className="p-5">

        {/* Amharic Name - Primary */}
        <h3 className="font-amharic text-lg font-bold text-[#173B32] leading-relaxed">
          {item.nameAm}
        </h3>

        {/* English Name - Secondary */}
        <p className="font-display text-base text-[#9A8158] mt-1">
          {item.name}
        </p>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-[#C5A46D] mt-4 mb-4" />

        {/* Amharic Description - Primary */}
        <p className="font-amharic text-sm text-[#4C5750] leading-7">
          {item.descriptionAm}
        </p>

        {/* English Description - Secondary */}
        <p className="text-xs text-stone-400 leading-6 mt-3">
          {item.description}
        </p>

      </div>

    </article>
  )
}
