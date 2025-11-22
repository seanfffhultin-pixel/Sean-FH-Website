import React, { useState } from "react";

export default function FeaturedReview() {
  const [open, setOpen] = useState(false);

  // Replace this with your REAL video ID + thumbnail + description
  const featured = {
    id: "kGnGlGt-Dco",
    title: "IndiGo’s HIDDEN Dreamliner — Amsterdam to Mumbai",
    description:
      "My full review of IndiGo’s surprising long-haul Dreamliner service. A new experience, unexpected moments, and a totally different side of the airline.",
  };

  return (
    <section
      id="featured-review"
      style={{
        marginTop: "80px",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "26px", fontWeight: "600", marginBottom: "25px" }}>
        ⭐ Featured Review of the Month
      </h3>

      {/* FEATURED CARD */}
      <div
        onClick={() => setOpen(true)}
        style={{
          cursor: "pointer",
          maxWidth: "750px",
          margin: "auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
          background: "#fff",
        }}
      >
        <img
          src={`https://i.postimg.cc/xjtd7H43/IN787-3.png`}
          alt={featured.title}
          style={{
            width: "100%",
            display: "block",
          }}
        />

        <div style={{ padding: "20px" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "700" }}>
            {featured.title}
          </h4>
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              color: "#555",
              lineHeight: "1.5",
            }}
          >
            {featured.description}
          </p>

          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              fontSize: "16px",
              background: "#ff0000",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Watch Now
          </button>
        </div>
      </div>

      {/* POPUP MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: "900px",
              background: "#000",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${featured.id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none", borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
