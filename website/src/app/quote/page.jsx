import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteForm from "../components/quoteForm";

export default function QuotePage() {
  return (
    <div className="">
      <Navbar />

      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-primary">Free Glass Quote</h1>
        <p className="text-lg mb-4 text-neutral-content">
          Thank you for your interest in GlassGo’s professional glass repair and replacement services!
        </p>
        <p className="mb-10 text-base-content">
          We specialize in fast, reliable, and mobile glass services tailored to your needs. Whether it’s a cracked windshield, a broken home window, or commercial glass repair, our team is here to help.
        </p>

        <div className="bg-base-100 rounded-xl shadow-xl p-8 text-left text-[17px] space-y-6 border border-base-300">
          <p>
            With certified GlassGo technicians on your side, you can expect precision and care in every job. We pride ourselves on using only top-quality glass materials and delivering 100% guaranteed workmanship.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Why Choose GlassGo?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mobile Services:</strong> We come to you, saving you time and hassle.</li>
              <li><strong>Quality Materials:</strong> Durable, long-lasting glass designed for performance.</li>
              <li><strong>Expert Technicians:</strong> Experienced and reliable professionals.</li>
              <li><strong>Satisfaction Guaranteed:</strong> We don’t stop until you're happy.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Our Services Include:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auto Glass Repair and Replacement</li>
              <li>Residential Glass Solutions</li>
              <li>Emergency Glass Repairs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">How It Works:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Request a Quote:</strong> Fill out the form below.</li>
              <li><strong>Schedule Your Service:</strong> We’ll contact you and arrange a time.</li>
              <li><strong>Get It Done:</strong> Our team completes the work with care and professionalism.</li>
            </ol>
          </div>

          <p className="text-lg font-semibold">
            Ready to get started? Complete the form below, and we’ll contact you ASAP with your free, no-obligation quote.
          </p>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </div>
  );
}