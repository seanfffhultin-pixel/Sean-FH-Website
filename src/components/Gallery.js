import React from "react";


export default function Gallery() {
  const photos = [
    "https://i.postimg.cc/pL2Wbh0Y/IMG-4618.jpg",
    "https://i.postimg.cc/25QVFRXW/IMG-4615.jpg",
    "https://i.postimg.cc/vmHpX50f/IMG-3750.jpg",
    "https://i.postimg.cc/q70Fq2ff/IMG-4614.jpg",
    "https://i.postimg.cc/GhnPRNjz/IMG-2874.jpg",
    "https://i.postimg.cc/L5L34p0g/IMG-2985.jpg",
    "https://i.postimg.cc/cJC7gYbH/IMG-2754.jpg",
    "https://i.postimg.cc/yxHSPSvW/IMG-1661.jpg",
    "https://i.postimg.cc/PqvpnM7Y/IMG-1768.jpg",
    "https://i.postimg.cc/Z5C06cJT/IMG-1138.jpg",
    "https://i.postimg.cc/vHSZ8Vff/IMG-1129.jpg",
    "https://i.postimg.cc/sD83CRCL/IMG-9301.jpg",
    "https://i.postimg.cc/DzcVZ9Hj/IMG-0869.jpg",
    "https://i.postimg.cc/nrgggp99/Screenshot-2025-01-16-at-18-58-15.jpg",
    "https://i.postimg.cc/bvYPQYxh/IMG-1140.jpg",
    "https://i.postimg.cc/9MrjnxgK/IMG-3419.jpg",
    "https://i.postimg.cc/J0XC1sL6/IMG-0775.jpg",
    "https://i.postimg.cc/5trr6fnN/IMG-0466.jpg"
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Photo Gallery</h1>
        <p className="gallery-subtitle">
          More photos on the dedicated page...
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((url, i) => (
          <div className="gallery-item" key={i}>
            <img src={url} alt={`Gallery ${i}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
