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
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/porcao-promocoes-logo.png"
            alt="Porcao das Promocoes - Logo do porquinho no carrinho de compras"
            width={320}
            height={320}
            className="w-64 h-auto md:w-80 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-semibold text-[#FFD700] mb-4 drop-shadow-md">
          O melhor grupo de ofertas!
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
          Encontre as melhores ofertas e descontos exclusivos. Nao perca nenhuma
          promocao!
        </p>

        {/* Telegram Button */}
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
    </section>
  )
}
