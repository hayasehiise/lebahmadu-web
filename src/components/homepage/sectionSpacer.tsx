'use client'
import Image from "next/image";

import ImageSpacer from "@publicAsset/spacer.webp";

export default function Spacer() {
  return <Image src={ImageSpacer} alt="spacer" />;
}