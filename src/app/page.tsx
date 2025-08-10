import ExploreCollection from "@/components/ExploreCollection"
import FeatureBar from "@/components/FeaturBar"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import InstagramStrip from "@/components/InstagramStrip"
import LatestProducts from "@/components/LatestProduct"
import NewsletterSignup from "@/components/NewLetterSignup"
import ShopByCategory from "@/components/ShopByCategory"
import TestimonialsInteractive from "@/components/TestimonialsInteractive"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <LatestProducts />
      <FeatureBar />
      <ExploreCollection />
      <NewsletterSignup />
      <TestimonialsInteractive />
      <InstagramStrip />

      {/* Uncomment the following components as needed */}
      {/* <Newsletter /> */}
      {/* <Testimonials /> */}
      {/* <Instagram /> */}
      {/* <Footer /> */}
      {/* next: LatestProducts, FeatureBar, ExploreCollection, Newsletter, Testimonials, Instagram, Footer */}
    </>
  )
}
