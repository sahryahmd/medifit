import Image from "next/image"
import Container from "./ui/Container"

const IMGS = ["/ig/ig1.png", "/ig/ig2.png", "/ig/ig3.png", "/ig/ig4.png"]

export default function InstagramStrip() {
  return (
    <section className="bg-white py-12">
      <Container>
        <h3 className="mb-6 text-center text-xl font-bold text-[#503217]">
          Follow us @medifit
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {IMGS.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Medifit ${i + 1}`}
                width={500}
                height={500}
                className="h-full w-full object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
