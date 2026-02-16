import Image from "next/image"

export function AppsPromoSection() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-center py-4 px-7 sm:p-8 pointer-events-none">
      <h3 className="mb-4 sm:mb-8 text-center text-lg sm:text-xl md:text-xl font-medium text-white drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        Apps que trazemos promoções para vocês
      </h3>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full max-w-4xl">
        {[
          { src: "/amazonlogo.png", alt: "Amazon Logo" },
          { src: "/MercadoLivrelogo.png", alt: "Mercado Livre Logo" },
          { src: "/shoppelogo.png", alt: "Shopee Logo" },
        ].map((logo, index) => (
          <div
            key={logo.alt}
            className="flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-3 sm:p-4 pointer-events-auto transform transition-transform hover:scale-105 duration-300 animate-in fade-in zoom-in-50 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={1  }
              height={100}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
