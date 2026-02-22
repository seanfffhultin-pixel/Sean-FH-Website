import React from "react";


export default function Gallery() {
  const photos = [
    "https://i.postimg.cc/br0HZzFp/IMG-4637.jpg", /* BA Embrear wing*/
    "https://i.postimg.cc/pL2Wbh0Y/IMG-4618.jpg", /* BA Embrear*/
    "https://i.postimg.cc/bYtNQjDf/IMG-4617.jpg", /* Etihad A380*/
    "https://i.postimg.cc/3xSHsL41/IMG-4610.jpg", /* Etihad 787*/
    "https://i.postimg.cc/d3VB7hgT/IMG_4290.jpg", /* AirAsia A320 wing*/
    "https://i.postimg.cc/bw1TM9RS/IMG_4268.jpg", /* AirAsia A320s*/
    "https://i.postimg.cc/gkZ875xy/IMG-4270.jpg", /* AirAsia A330*/
    "https://i.postimg.cc/25QVFRXW/IMG-4615.jpg", /* Cathay A330*/
    "https://i.postimg.cc/QCcScgVB/IMG-4619.jpg", /* Cathay A330*/
    "https://i.postimg.cc/W4W4bd0G/IMG-4004.jpg", /* Singapore A350*/
    "https://i.postimg.cc/FFjDd7ZQ/IMG-3870.jpg", /* Etihad 787 wing*/
    "https://i.postimg.cc/vmHpX50f/IMG-3750.jpg", /* Etihad 777*/
    "https://i.postimg.cc/q70Fq2ff/IMG-4614.jpg", /* Easyjet A320*/
    "https://i.postimg.cc/qBYWHQ8J/Image-29-01-2026-at-21-28.jpg", /* Easyjet A320 + Sean*/
    "https://i.postimg.cc/cCbSpS05/IMG-3630.jpg", /* Easyjet A320 wing*/
    "https://i.postimg.cc/7PCfPBcq/IMG-3347.jpg", /* Norse 787*/
    "https://i.postimg.cc/HLZkd594/IMG-3330.jpg", /* Indigo A320 wing*/
    "https://i.postimg.cc/2jGc4gf0/Screenshot-2025-12-09-at-20-30-49.jpg", /* Indigo A320*/
    "https://i.postimg.cc/L5L34p0g/IMG-2985.jpg", /* Bangkok Airways A320 wing*/
    "https://i.postimg.cc/7hZVC5jS/IMG_2959.jpg", /* Aeroflot 777*/
    "https://i.postimg.cc/fRmxR7kc/IMG-0713.jpg", /*Bangkok Airways ATR underside*/
    "https://i.postimg.cc/gkyHfGhW/IMG-0699.jpg", /* Bangkok Airways A320 underside*/
    "https://i.postimg.cc/GhnPRNjz/IMG-2874.jpg", /* Indigo A320*/
    "https://i.postimg.cc/Bn2gyBC8/IMG_1973.jpg", /* Indigo A320 + Sean*/
    "https://i.postimg.cc/bJrfTBbx/IMG-2851.jpg", /* Saudia 777*/
    "https://i.postimg.cc/8zLH3mbJ/IMG_1974.jpg", /* Norse 787 interior + Sean*/
    "https://i.postimg.cc/Dzw6rR8W/IMG-2834.jpg", /* Norse 787 intiero*/
    "https://i.postimg.cc/cJC7gYbH/IMG-2754.jpg", /* Indigo 787*/
    "https://i.postimg.cc/x8DL4ZT1/IMG-2753.jpg", /* BA A320*/
    "https://i.postimg.cc/5N3X9qLK/IMG-2052.jpg", /* BA A320 wing*/
    "https://i.postimg.cc/2S8Z8fL4/IMG-2044.jpg", /* BA A320*/
    "https://i.postimg.cc/4xp5MQ1m/IMG_6268.jpg", /* BA A320 nose*/
    "https://i.postimg.cc/0Qgjmgrx/IMG-2026.jpg", /* Iceland 757*/
    "https://i.postimg.cc/cLfmjBcv/IMG_1956.jpg", /* Lufthansa A350*/
    "https://i.postimg.cc/PqvpnM7Y/IMG-1768.jpg", /* Thai A320 wing*/
    "https://i.postimg.cc/90GVT0wJ/IMG-1953.jpg", /* Thai A320*/
    "https://i.postimg.cc/yxHSPSvW/IMG-1661.jpg", /* Thai A350 wing*/
    "https://i.postimg.cc/XY98hkgX/IMG_1630.jpg", /* Thai A350 wing*/
    "https://i.postimg.cc/QdcbPJqM/IMG_1595.jpg", /* BA A320 wing*/
    "https://i.postimg.cc/QdwdGLQx/IMG-1590.jpg", /* Singpaore A380*/
    "https://i.postimg.cc/Z5C06cJT/IMG-1138.jpg", /* Ethiopian A350 wing*/
    "https://i.postimg.cc/7YvRPSwP/IMG-1136.jpg", /* Ethiopian A350*/
    "https://i.postimg.cc/Jzjqg5Q4/IMG_1002.jpg", /* Flysafair 737 + Sean*/
    "https://i.postimg.cc/sD83CRCL/IMG-9301.jpg", /* Flysafair 737*/
    "https://i.postimg.cc/hPksp5V7/IMG_0871.jpg", /* Rwandair A330 + Sean*/
    "https://i.postimg.cc/DzcVZ9Hj/IMG-0869.jpg", /* Rwandair A330*/
    "https://i.postimg.cc/J0FC8jvy/IMG-0857.jpg", /* Rwandair A330 wing*/
    "https://i.postimg.cc/nrgggp99/Screenshot-2025-01-16-at-18-58-15.jpg", /* SAS A320s*/
    "https://i.postimg.cc/Kc5HKt1v/IMG-7798.jpg", /* SAS A320*/
    "https://i.postimg.cc/Z5kXLYSC/IMG-0475.jpg", /* Turkish A350 wing*/
    "https://i.postimg.cc/vHSZ8Vff/IMG-1129.jpg", /* Turkish A350*/
    "https://i.postimg.cc/tgkfyhVY/IMG-0134.jpg", /* Saudia 787 wing*/
    "https://i.postimg.cc/Prgy2R1v/IMG_7446.jpg", /* Shenzhen A320*/
    "https://i.postimg.cc/X7RLQz9J/IMG_1885.jpg", /* Shenzhen A330 wing*/
    "https://i.postimg.cc/WbB8XH0z/IMG_7070.jpg", /* Ryanair 737*/
    "https://i.postimg.cc/MKC5dF1p/IMG_1383.jpg", /* Ryanair 737 wing*/
    "https://i.postimg.cc/Prgy2R1r/IMG_6188.jpg", /* Pacific A320 wing*/
    "https://i.postimg.cc/nrd23YmS/IMG-5389.jpg", /* Pacific A320*/
    "https://i.postimg.cc/SNBdDvcm/IMG_6163.jpg", /* China Airlines A350*/
    "https://i.postimg.cc/VLycKW9c/IMG-0116.jpg", /* Vietnam A320*/
    "https://i.postimg.cc/bvYPQYxh/IMG-1140.jpg", /* Air China 747*/
    "https://i.postimg.cc/tJXQZgCt/IMG-1093.jpg", /* Lufthansa 747*/
    "https://i.postimg.cc/K8fSvXdp/IMG-0964.jpg", /* Ryanair 737*/
    "https://i.postimg.cc/MpG639w4/IMG-0863.jpg", /* Ryanair 737 nose*/
    "https://i.postimg.cc/hPLQRyNN/IMG-0549.jpg", /* Thai 777*/
    "https://i.postimg.cc/wTXRYfnC/IMG-0539.jpg", /* AirFrance Tails*/
    "https://i.postimg.cc/4nkfSGJ5/IMG-0332.jpg", /* Saudia 787*/
    "https://i.postimg.cc/fbb4V2sB/IMG-4574.jpg", /* Saudia A320 + Sean*/
    "https://i.postimg.cc/25mq5QN0/IMG-0247.jpg", /* BA A320 cockpit + Sean*/
    "https://i.postimg.cc/RVxj7V9v/IMG-0242.jpg", /* BA A320 wing*/
    "https://i.postimg.cc/x1WCdsxB/IMG-3764.jpg", /* Ryanair Tail*/
    "https://i.postimg.cc/FKQSLt3p/IMG-1045.jpg", /* United 787*/
    "https://i.postimg.cc/9MrjnxgK/IMG-3419.jpg", /* Qantas 737*/
    "https://i.postimg.cc/QxyVpLG3/IMG-3416.jpg", /* Qantas A330 + Sean*/
    "https://i.postimg.cc/J0XC1sL6/IMG-0775.jpg", /* Singapore 737*/
    "https://i.postimg.cc/GtbTSvqL/IMG-3108.jpg", /* Thai 777 + Sean*/
    "https://i.postimg.cc/mrkqLP3C/IMG-3085.jpg", /* BA A320 + Sean*/
    "https://i.postimg.cc/5trr6fnN/IMG-0466.jpg" /* BA A320 wing*/
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Photo Gallery</h1>
        <p className="gallery-subtitle">
          A collection of my aviation photos from around the world! (in chronological order)
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
