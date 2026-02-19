import React from "react";


export default function Gallery() {
  const photos = [
    "https://i.postimg.cc/pL2Wbh0Y/IMG-4618.jpg", /* BA Embrear*/
    "https://i.postimg.cc/bYtNQjDf/IMG-4617.jpg", /* Etihad A380*/
    "https://i.postimg.cc/3xSHsL41/IMG-4610.jpg", /* Etihad 787*/
    "https://i.postimg.cc/gkZ875xy/IMG-4270.jpg", /* AirAsia A330*/
    "https://i.postimg.cc/25QVFRXW/IMG-4615.jpg", /* Cathay A330*/
    "https://i.postimg.cc/W4W4bd0G/IMG-4004.jpg", /* Singapore A350*/
    "https://i.postimg.cc/FFjDd7ZQ/IMG-3870.jpg", /* Etihad 787 wing*/
    "https://i.postimg.cc/vmHpX50f/IMG-3750.jpg", /* Etihad 777*/
    "https://i.postimg.cc/q70Fq2ff/IMG-4614.jpg", /* Easyjet A320*/
    "https://i.postimg.cc/HLZkd594/IMG-3330.jpg", /* Indigo A320 wing*/
    "https://i.postimg.cc/2jGc4gf0/Screenshot-2025-12-09-at-20-30-49.jpg", /* Indigo A320*/
    "https://i.postimg.cc/bJrfTBbx/IMG-2851.jpg", /* Saudia 777*/
    "https://i.postimg.cc/GhnPRNjz/IMG-2874.jpg", /* Indigo A320*/
    "https://i.postimg.cc/7PCfPBcq/IMG-3347.jpg", /* Norse 787*/
    "https://i.postimg.cc/Dzw6rR8W/IMG-2834.jpg", /* Norse 787 intiero*/
    "https://i.postimg.cc/2S8Z8fL4/IMG-2044.jpg", /* BA A320*/
    "https://i.postimg.cc/0Qgjmgrx/IMG-2026.jpg", /* Iceland 757*/
    "https://i.postimg.cc/QdwdGLQx/IMG-1590.jpg", /* Singpaore A380*/
    "https://i.postimg.cc/L5L34p0g/IMG-2985.jpg", /* Bangkok Airways A320 wing*/
    "https://i.postimg.cc/gkyHfGhW/IMG-0699.jpg", /* Bangkok Airways A320 underside*/
    "https://i.postimg.cc/cJC7gYbH/IMG-2754.jpg", /* Indigo 787*/
    "https://i.postimg.cc/x8DL4ZT1/IMG-2753.jpg", /* BA A320*/
    "https://i.postimg.cc/5N3X9qLK/IMG-2052.jpg", /* BA A320 wing*/
    "https://i.postimg.cc/yxHSPSvW/IMG-1661.jpg", /* Thai A350 wing*/
    "https://i.postimg.cc/PqvpnM7Y/IMG-1768.jpg", /* Thai A320 wing*/
    "https://i.postimg.cc/90GVT0wJ/IMG-1953.jpg", /* Thai A320*/
    "https://i.postimg.cc/Z5C06cJT/IMG-1138.jpg", /* Ethiopian A350 wing*/
    "https://i.postimg.cc/7YvRPSwP/IMG-1136.jpg", /* Ethiopian A350*/
    "https://i.postimg.cc/vHSZ8Vff/IMG-1129.jpg", /* Turkish A350*/
    "https://i.postimg.cc/sD83CRCL/IMG-9301.jpg", /* Flysafair 737*/
    "https://i.postimg.cc/J0FC8jvy/IMG-0857.jpg", /* Rwandair A330 wing*/
    "https://i.postimg.cc/DzcVZ9Hj/IMG-0869.jpg", /* Rwandair A330*/
    "https://i.postimg.cc/nrgggp99/Screenshot-2025-01-16-at-18-58-15.jpg", /* SAS A320s*/
    "https://i.postimg.cc/Kc5HKt1v/IMG-7798.jpg", /* SAS A320*/
    "https://i.postimg.cc/Z5kXLYSC/IMG-0475.jpg", /* Turkish A350 wing*/
    "https://i.postimg.cc/tgkfyhVY/IMG-0134.jpg", /* Saudia 787 wing*/
    "https://i.postimg.cc/WpxsQvvX/IMG-1884.jpg", /* Shenzhen A330 wing*/
    "https://i.postimg.cc/bvYPQYxh/IMG-1140.jpg", /* Air China 747*/
    "https://i.postimg.cc/9MrjnxgK/IMG-3419.jpg", /* Qantas 737*/
    "https://i.postimg.cc/J0XC1sL6/IMG-0775.jpg", /* Singapore 737*/
    "https://i.postimg.cc/nrd23YmS/IMG-5389.jpg", /* Pacific A320*/
    "https://i.postimg.cc/VLycKW9c/IMG-0116.jpg", /* Vietnam A320*/
    "https://i.postimg.cc/K8fSvXdp/IMG-0964.jpg", /* Ryanair 737*/
    "https://i.postimg.cc/fbb4V2sB/IMG-4574.jpg", /* Saudia A320*/
    "https://i.postimg.cc/x1WCdsxB/IMG-3764.jpg", /* Ryanair Tail*/
    "https://i.postimg.cc/RVxj7V9v/IMG-0242.jpg", /* BA A320 wing*/
    "https://i.postimg.cc/mrkqLP3C/IMG-3085.jpg", /* BA A320*/
    "https://i.postimg.cc/5trr6fnN/IMG-0466.jpg" /* BA A320 wing*/
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Photo Gallery</h1>
        <p className="gallery-subtitle">
          A collection of my aviation photos from around the world!
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
