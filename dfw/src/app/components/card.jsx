import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/img/5.jpg";
import img2 from "../assets/img/6.jpg";
import img3 from "../assets/img/7.jpg";
import img4 from "../assets/img/8.jpg";

const slides = [
  {
    image: img1,
    title: "Windshield Replacement & Auto Glass Repair",
    description:
      "Cracked or chipped windshield? GlassGo provides fast and reliable auto glass repairs using the highest-quality materials to keep your vehicle safe and road-ready.",
  },
  {
    image: img2,
    title: "Residential Window Installation",
    description:
      "Upgrade your home with stylish and energy-efficient windows. We handle everything from single-pane repairs to full window replacements with precision.",
  },
  {
    image: img3,
    title: "Emergency Storm Damage Services",
    description:
      "When storms strike, our mobile glass team responds fast. From shattered car windows to broken patio doors, we restore your glass quickly and safely.",
  },
  {
    image: img4,
    title: "Custom Shower Glass & Tabletops",
    description:
      "Transform your space with custom-cut glass for showers, vanities, and tables. GlassGo delivers premium results tailored to your home's unique design.",
  },
];

const Card = () => {
  return (
    <section className="bg-base-100 text-white py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-2xl text-center md:text-3xl font-bold text-white mb-4">
          Experience Top-Quality Auto and Residential Glass Replacement in Dallas
        </h1>
      </div>

      <div className="grid gap-16">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}
          >
            <div className="w-full md:w-1/2 h-96 relative rounded-xl shadow-lg overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                {slide.title}
              </h2>
              <p className="text-white text-lg">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;