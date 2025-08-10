"use client"

import Container from "./ui/Container"
import { RotateCcw, ShieldCheck, BadgeCheck } from "lucide-react"

type Feature = {
  icon: React.ReactNode
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  {
    icon: <BadgeCheck size={20} />,
    title: "30-day warranty",
    desc: "Quality assurance you can trust.",
  },
  {
    icon: <RotateCcw size={20} />,
    title: "Exchange policy",
    desc: "Easy product swap within 7 days.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Secure payments",
    desc: "Your transactions are protected.",
  },
]

export default function FeatureBar() {
  return (
    <section className="bg-[#FCFAF7] py-8 sm:py-10">
      <Container>
        <ul className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <li
              key={i}
              className="
                group flex items-start gap-3 rounded-2xl border border-[#E6DED5] bg-white
                p-4 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                transition hover:-translate-y-0.5 hover:shadow-sm
              "
            >
              <div
                className="
                  grid h-10 w-10 place-items-center rounded-full bg-[#F4EFEA]
                  text-[#503217] ring-1 ring-black/5
                "
              >
                <span className="[&>*]:stroke-[1.75]">{f.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#503217]">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs text-[#6B5E55]">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
