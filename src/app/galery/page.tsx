'use client'
import dynamic from "next/dynamic"

const GaleryListSection = dynamic(() => import('@components/galery/sectionGaleryList'))

export default function Galery() {
    return(
        <>
        <GaleryListSection />
        </>
    )
}