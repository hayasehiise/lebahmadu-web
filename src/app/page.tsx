'use client'
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import('@components/homepage/sectionHero'))
const AboutSection = dynamic(() => import('@components/homepage/sectionAbout'))
const VisiMisiSection = dynamic(() => import('@components/homepage/sectionVisiMisi'))
const SpacerSection = dynamic(() => import('@components/homepage/sectionSpacer'))
const EventTimelineSection = dynamic(() => import('@components/homepage/sectionEventTimeline'))
const MitraSection = dynamic(() => import('@components/homepage/sectionMitra'))

export default function Home() {
  return(
    <>
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <SpacerSection />
      <EventTimelineSection />
      <MitraSection />
    </>
  )
}
