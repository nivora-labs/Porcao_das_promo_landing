import { Send } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/gemini-generated-image-4eo0pm4eo0pm4eo0.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#228B22]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pb-32 sm:pb-0">
        {/* Logo */}
        <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-top-8 duration-700">
          <Image
            src="/images/porcao-promocoes-logo.png"
            alt="Porcao das Promocoes - Logo do porquinho no carrinho de compras"
            width={320}
            height={320}
            className="w-56 sm:w-64 md:w-80 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFD700] mb-4 drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          O melhor grupo de ofertas!
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 font-semibold leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
          Encontre as melhores ofertas e descontos exclusivos. Não perca nenhuma
          promoção!
        </p>

        {/* Telegram Button */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <a
            href="https://t.me/+qpc9ncp2MYs3YzJh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0088CC] hover:bg-[#0077B3] text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Send className="w-6 h-6" />
            Entrar no Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
