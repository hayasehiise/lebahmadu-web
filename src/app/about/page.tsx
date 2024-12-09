'use client'
import dynamic from "next/dynamic"

const CompanyProfileSection = dynamic(() => import('@components/about/sectionCompanyProfile'))
const HeadAndViceSection = dynamic(() => import('@components/about/sectionHeadVice'))

export default function About() {
    return(
        <>
        <CompanyProfileSection />
        <HeadAndViceSection />
        </>
    )
}