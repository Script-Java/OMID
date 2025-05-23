import Image from "next/image";
import img1 from "../assets/img/res/1.jpg";
import img2 from "../assets/img/res/2.jpg";
import img3 from "../assets/img/res/3.jpg";
import img4 from "../assets/img/res/4.jpg";

export default function ResCards() {
  return (
    <section className="bg-black py-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Expert Residential Glass Repair and Replacement Services in Dallas
        </h2>
        <p className="text-white text-lg">
          From frameless shower doors to storm window replacements, GlassGo delivers top-tier residential glass services across Dallas.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-12">
        {[
          { img: img1, label: "Shower Glass Doors" },
          { img: img2, label: "Custom Mirrors" },
          { img: img3, label: "Glass Table Tops" },
          { img: img4, label: "Sliding Glass Doors" }
        ].map(({ img, label }, idx) => (
          <div key={idx} className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md">
            <Image src={img} alt={label} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-semibold">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto mt-16 px-6 text-white leading-relaxed text-[17px] space-y-5">
        <p>
          Whether you need custom-cut mirrors, frosted patio doors, or energy-efficient window replacements, our expert team has you covered.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Custom Mirrors & Mirror Replacement</li>
          <li>Glass Table Tops for Desks & Dining</li>
          <li>Tempered Sliding Glass Doors</li>
          <li>Storm & Garage Door Glass</li>
          <li>Exterior Window Replacements</li>
          <li>Elegant Shower Glass Installations</li>
        </ul>
        <p>
          Our residential services are designed to improve both aesthetics and energy efficiency of your home. Whether you're remodeling a bathroom or replacing outdated patio doors, we ensure every install is clean, secure, and built to last.
        </p>
        <p>
          Our tempered glass and custom-fit solutions offer peace of mind without sacrificing style. Discover how GlassGo can help you modernize your home today.
        </p>
        <p className="font-semibold">
          Contact us today for a free quote or to schedule a consultation for your residential glass needs!
        </p>
      </div>
    </section>
  );
}
