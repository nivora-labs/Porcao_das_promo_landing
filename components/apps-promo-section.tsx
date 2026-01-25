import Image from "next/image"

export function AppsPromoSection() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center p-8 pointer-events-none">
      <h3 className="mb-8 text-center text-3xl font-bold text-white">Apps Que Trazemos Promoções Para Vocês</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center bg-transparent pointer-events-auto">
          <Image src="/amazonlogo.png" alt="Amazon Logo" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center bg-transparent pointer-events-auto">
          <Image src="/MercadoLivrelogo.png" alt="Mercado Livre Logo" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center bg-transparent pointer-events-auto">
          <Image src="/shoppelogo.png" alt="Shopee Logo" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}
