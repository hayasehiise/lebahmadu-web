import dynamic from "next/dynamic";

const FamiliaDetail = dynamic(
  () => import("@components/galery/slug/familiaDetail")
);
const Hut45Detail = dynamic(() => import('@components/galery/slug/hut45Detail'))
const Hut46Detail = dynamic(() => import('@components/galery/slug/hut46Detail'))
const KumHamFestDetail = dynamic(() => import('@components/galery/slug/kumhamDetail'))
const PSEDetail = dynamic(() => import('@components/galery/slug/pseDetail'))
const TogeanDetail = dynamic(() => import('@components/galery/slug/togeanDetail'))
const PLNDetail = dynamic(() => import('@components/galery/slug/plnDetail'))

export default async function GaleryDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  switch (slug) {
    case "familiarization":
      return <FamiliaDetail />;
    case "hut45":
      return <Hut45Detail />;
    case "kumhamfest":
      return <KumHamFestDetail />;
    case "pse2023":
      return <PSEDetail />;
    case "hut46":
      return <Hut46Detail />;
    case "togean":
      return <TogeanDetail />;
    case 'pln':
      return <PLNDetail />
    default:
      return <p>None</p>;
  }
}
