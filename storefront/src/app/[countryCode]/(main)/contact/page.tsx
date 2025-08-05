import { Metadata } from "next"
import FeaturedProducts from "@modules/home/components/featured-products"
import Contact from "@modules/home/components/contact"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Cropdefense - Store",
  description:
    "Cropdefense is a leading provider of crop protection solutions, offering a wide range of products to safeguard your crops and ensure healthy yields.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Contact />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
