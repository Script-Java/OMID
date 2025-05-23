"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Card from "./components/card";
import Services from "./components/services";
import Image from "next/image";
import bgImage from "./assets/img/12.jpg";
import Link from "next/link";
import Triple from "./components/triple";
import Satisfaction from "./components/satisfaction";
import Areas from "./components/areas";

import dynamic from "next/dynamic";
const TrustindexWidget = dynamic(() => import("./components/reviews"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-base-100 text-white">
      <Navbar />
      <Slider />
      <Card />
      <Services />

      {/* Tools of the Trade Hero Section */}
      <section className="relative w-full h-[600px] my-12">
        <Image
          src={bgImage}
          alt="Tools Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h3 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Tools of the Trade: Excellence in Glass Repair and Replacement
          </h3>
          <p className="max-w-3xl text-lg md:text-xl mb-4">
            GlassGo customers deserve nothing but the best glass services Dallas
            and the surrounding areas have to offer. Our team uses
            state-of-the-art tools and top-grade materials to guarantee lasting
            results and flawless finishes.
          </p>
          <p className="max-w-3xl text-lg md:text-xl mb-6">
            After every repair, our technicians leave your glass spotless using
            premium wipes, towels, and cleaners. Trust GlassGo for expert
            craftsmanship and unmatched attention to detail.
          </p>
          <Link
            href="/quote"
            className="btn btn-outline text-white text-lg px-6 py-3 rounded-md shadow-md"
          >
            Schedule an Appointment Now
          </Link>
        </div>
      </section>
      <Triple></Triple>

      {/* Trustindex Section */}
      <TrustindexWidget />
      <Satisfaction />
      <Areas></Areas>
      

      <Footer />
    </div>
  );
}