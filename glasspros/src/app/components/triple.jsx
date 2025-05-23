import img1 from "../assets/img/11.jpg";
import img2 from "../assets/img/9.jpg";
import img3 from "../assets/img/10.jpg";
import Image from "next/image";

export default function Triple() {
  return (
    <section className="">
      {/* Feature Images */}
      <section className="my-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <Image src={img1} alt="Glass Repair 1" className="w-full object-cover rounded-lg" />
          <Image src={img2} alt="Glass Repair 2" className="w-full object-cover rounded-lg" />
          <Image src={img3} alt="Glass Repair 3" className="w-full object-cover rounded-lg" />
        </div>
      </section>

      {/* GlassGo Highlights */}
      <section className="my-12 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 border-b border-primary pb-2">CUSTOMER SATISFACTION GUARANTEED</h3>
          <p>
            At GlassGo, your satisfaction is our top priority. From windshield replacements to home window repairs, our expert team ensures a seamless, stress-free experience every time. With 21 years of experience in auto glass repair and residential glass replacement, we’re committed to delivering results that exceed your expectations.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 border-b border-primary pb-2">ECO-FRIENDLY GLASS REPAIR SOLUTIONS</h3>
          <p>
            GlassGo offers sustainable and cost-effective glass repair services to reduce waste and protect the environment. Whether it’s windshield chip repair or home glass pane restoration, our eco-friendly approach helps you save money while contributing to a greener planet.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 border-b border-primary pb-2">SAME-DAY GLASS REPAIR SERVICE</h3>
          <p>
            We know how urgent auto glass repairs or broken home window replacements can be, which is why GlassGo offers same-day glass repair services for your convenience. Whether you need a windshield replacement in Dallas or a quick home glass repair, we’re here to help you stay safe and stress-free.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2 border-b border-primary pb-2">ADVANCED GLASS TECHNOLOGY</h3>
          <p>
            GlassGo uses state-of-the-art tools and materials for all auto glass repair and residential glass replacement services. From precision-cutting equipment for custom glass table tops to high-grade adhesives for windshield installations, our advanced technology ensures durable, high-quality results every time.
          </p>
        </div>
      </section>
    </section>
  );
}