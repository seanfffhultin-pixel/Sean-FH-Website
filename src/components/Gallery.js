import React from "react";

export default function Gallery() {
  const photos = [
    "https://i.postimg.cc/pL2Wbh0Y/IMG-4618.jpg",
    "https://i.postimg.cc/bYtNQjDf/IMG-4617.jpg",
    "https://i.postimg.cc/3xSHsL41/IMG-4610.jpg",
    "https://i.postimg.cc/gkZ875xy/IMG-4270.jpg",
    "https://i.postimg.cc/25QVFRXW/IMG-4615.jpg",
    "https://i.postimg.cc/FFjDd7ZQ/IMG-3870.jpg",
    "https://i.postimg.cc/vmHpX50f/IMG-3750.jpg",
    "https://i.postimg.cc/q70Fq2ff/IMG-4614.jpg",
    "https://i.postimg.cc/HLZkd594/IMG-3330.jpg",
    "https://i.postimg.cc/bJrfTBbx/IMG-2851.jpg",
    "https://i.postimg.cc/GhnPRNjz/IMG-2874.jpg",
    "https://i.postimg.cc/7PCfPBcq/IMG-3347.jpg",
    "https://i.postimg.cc/Dzw6rR8W/IMG-2834.jpg",
    "https://i.postimg.cc/2S8Z8fL4/IMG-2044.jpg",
    "https://i.postimg.cc/0Qgjmgrx/IMG-2026.jpg",
    "https://i.postimg.cc/QdwdGLQx/IMG-1590.jpg",
    "https://i.postimg.cc/L5L34p0g/IMG-2985.jpg",
    "https://i.postimg.cc/gkyHfGhW/IMG-0699.jpg",
    "https://i.postimg.cc/cJC7gYbH/IMG-2754.jpg",
    "https://i.postimg.cc/x8DL4ZT1/IMG-2753.jpg",
    "https://i.postimg.cc/yxHSPSvW/IMG-1661.jpg",
    "https://i.postimg.cc/PqvpnM7Y/IMG-1768.jpg",
    "https://i.postimg.cc/Z5C06cJT/IMG-1138.jpg",
    "https://i.postimg.cc/vHSZ8Vff/IMG-1129.jpg",
    "https://i.postimg.cc/sD83CRCL/IMG-9301.jpg",
    "https://i.postimg.cc/J0FC8jvy/IMG-0857.jpg",
    "https://i.postimg.cc/DzcVZ9Hj/IMG-0869.jpg",
    "https://i.postimg.cc/nrgggp99/Screenshot-2025-01-16-at-18-58-15.jpg",
    "https://i.postimg.cc/Z5kXLYSC/IMG-0475.jpg",
    "https://i.postimg.cc/tgkfyhVY/IMG-0134.jpg",
    "https://i.postimg.cc/WpxsQvvX/IMG-1884.jpg",
    "https://i.postimg.cc/bvYPQYxh/IMG-1140.jpg",
    "https://i.postimg.cc/9MrjnxgK/IMG-3419.jpg",
    "https://i.postimg.cc/J0XC1sL6/IMG-0775.jpg",
    "https://i.postimg.cc/VLycKW9c/IMG-0116.jpg",
    "https://i.postimg.cc/K8fSvXdp/IMG-0964.jpg",
    "https://i.postimg.cc/fbb4V2sB/IMG-4574.jpg",
    "https://i.postimg.cc/RVxj7V9v/IMG-0242.jpg",
    "https://i.postimg.cc/mrkqLP3C/IMG-3085.jpg",
    "https://i.postimg.cc/5trr6fnN/IMG-0466.jpg"
  ];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Photo Gallery</h2>

      <div className="gallery-grid">
        {photos.map((url, i) => (
          <div className="gallery-item" key={i}>
            <img key={i} src={url} alt="Travel" />
          </div>
        ))}
      </div>
    </section>
  );
}
