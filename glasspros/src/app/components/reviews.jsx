"use client";

export default function TrustindexWidget() {
  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-primary">
          What Our Customers Say
        </h3>
        <iframe
          src="https://cdn.trustindex.io/amp-widget.html#fcce08d46d0063531896f3d2dbd"
          style={{
            display: "block",
            width: "100%",
            height: "901px", // Match what Trustindex recommends
            border: "0",
            borderRadius: "12px",
            backgroundColor: "transparent",
            overflowX: "hidden",
          }}
          scrolling="no"
          loading="lazy"
          title="Trustindex Reviews"
        ></iframe>
      </div>
    </section>
  );
}
