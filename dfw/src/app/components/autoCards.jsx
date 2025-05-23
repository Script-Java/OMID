import Image from "next/image";
import img1 from "../assets/img/c1.jpg";
import img2 from "../assets/img/c2.jpg";
import img3 from "../assets/img/c3.jpg";
import img4 from "../assets/img/c4.jpg";

export default function AutoCard() {
  return (
    <section className="bg-black py-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Expert Auto Glass Repair and Replacement Services in Dallas
        </h2>
        <p className="text-white text-lg">
          At GlassGo, our experienced technicians serve the Dallas Metroplex with fast, professional mobile auto glass services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-12">
        {[{ img: img1, label: "Auto Glass Repair" },
          { img: img2, label: "Windshield Replacement" },
          { img: img3, label: "Window Tinting" },
          { img: img4, label: "Mobile Service" }
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
          From chipped windshields to full replacements, we handle it all with precision and care. Our mobile team brings expert repair to your location, saving you time and stress. Whether you’re dealing with a cracked window or need fleet servicing, GlassGo delivers.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auto Glass Repair & Replacement</li>
          <li>Windshield Replacement & Repair</li>
          <li>Commercial & Fleet Services</li>
          <li>Wind, Noise, & Water Leak Repairs</li>
          <li>Off-Track Door Window Repairs</li>
          <li>Regulator & Motor Replacement</li>
        </ul>
        <p>
          We’re your trusted partner for fast, reliable auto glass services in Dallas. Same-day mobile service, top-rated workmanship, and customer-first support make us the #1 choice for all your vehicle glass needs.
        </p>
        <p className="font-semibold">
          Contact us today for a free quote or to schedule your repair!
        </p>
      </div>
    </section>
  );
}
