import ArcGalleryHero from "@/components/ArcGalleryHero";
import StylesSection from "@/components/StylesSection";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/8ea94b29-851b-478e-9d80-4ad3613164c3.jpg",
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/dcd51405-7d9b-4edd-b664-b1a0f6a4480d.jpg",
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/bf739d06-2903-4efb-b6c6-14ea89f0c0e4.jpg",
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/4ad66cc3-a6a6-4e20-8a14-939c7cba4a58.jpg",
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/461b0357-9fd3-4011-ae74-e2a6451e32ab.jpg",
    "https://cdn.poehali.dev/projects/d4aa5165-587a-422c-affb-ae55e93d482b/files/0c4b4cb5-b028-4d56-889d-74ed503fe7ca.jpg",
  ];

  return (
    <main className="relative bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
      <StylesSection />
    </main>
  );
};

export default Index;