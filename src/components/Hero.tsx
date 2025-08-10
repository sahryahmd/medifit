import Image from "next/image"
import Container from "./ui/Container"
import ShopNowButton from "./ui/ShopNowButton"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4EFEA]">
      {/* background doodles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/doodles.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      <Container>
        <div
          className="
            relative mx-auto
            grid items-center
            gap-8 md:gap-10 lg:gap-12
            py-14 md:py-20
            md:grid-cols-[1.1fr_0.9fr]
            max-w-screen-xl
          "
        >
          {/* LEFT: text */}
          <div className="relative z-10 pl-4 sm:pl-8 lg:pl-12">
            <h1 className="text-4xl font-extrabold leading-tight text-[#503217] sm:text-5xl xl:text-[56px] xl:leading-[1.05]">
              Your trusted <br /> care now <br /> and always
            </h1>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#6B5E55]">
              For the best results, align your health needs with your medication
              plan.
            </p>

            <div className="mt-7">
              <ShopNowButton href="#categories" />
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-[#6B5E55]">
              <div>• 30-day warranty</div>
              <div>• Secure payments</div>
              <div>• Fast support</div>
            </div>
          </div>

          {/* RIGHT: image */}
          <div
            className="
              relative z-10 w-full max-w-[500px]
              justify-self-center
            "
          >
            {/* lingkaran besar */}

            <div className="relative mx-auto aspect-[4/3] w-full">
              <Image
                src="/bottles.png"
                alt="Medifit products"
                fill
                priority
                className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
