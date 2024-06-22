import HeroSection from "@/components/HeroSection"
import PromoSection from "@/components/PromoSection"
import SpecialsSection from "@/components/SpecialsSection"
import UpcomingEventsSection from "@/components/UpcomingEventsSection"
import { getSiteData } from "@/graphql/api"
import { Flex } from "@chakra-ui/react"

export default async function HomePage() {
  const { data } = await getSiteData()

  return (
    <>
      <HeroSection data={data} />
      <Flex flexDirection="column" width="100%" position="relative">
        <SpecialsSection data={data} />
        <PromoSection data={data} />
        <UpcomingEventsSection />
      </Flex>
    </>
  )
}
