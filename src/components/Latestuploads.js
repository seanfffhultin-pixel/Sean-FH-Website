import React from "react";

export default function LatestUploadsWithThumbnails() {
  // Replace these with your real video IDs + titles:
  const videos = [
    {
      id: "kGnGlGt-Dco",
      title: "Flying ECONOMY on IndiGo’s Hidden Dreamliner (Amsterdam – Mumbai)",
    },
    {
      id: "WNAmr-5lGGk",
      title: "Ethiopian Airlines SAVED ME! (And They are AMAZING!)",
    },
    {
      id: "AICcfhtgT90",
      title: "You Should Try THIS Thai Sleeper Train!",
    },
  ];

  return (
    <section
      id="latest"
      style={{
        marginTop: "80px",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "30px" }}>
        Latest Uploads
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {videos.map((video, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt={video.title}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
              <p
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "500",
                  background: "#fff",
                }}
              >
                {video.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
