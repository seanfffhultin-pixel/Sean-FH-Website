import React, { useEffect, useState } from "react";

const photos = [
    "/images/IMG_4637.jpeg", /* BA Embrear wing*/
    "/images/IMG_4618.jpeg", /* BA Embrear*/
    "/images/IMG_4617.jpeg", /* Etihad A380*/
    "/images/IMG_4610.jpeg", /* Etihad 787*/
    "/images/IMG_4290.jpeg", /* AirAsia A320 wing*/
    "/images/IMG_4268.jpeg", /* AirAsia A320s*/
    "/images/IMG_4270.jpeg", /* AirAsia A330*/
    "/images/IMG_4615.jpeg", /* Cathay A330*/
    "/images/IMG_4619.jpeg", /* Cathay A330*/
    "/images/IMG_4004.jpeg", /* Singapore A350*/
    "/images/IMG_3870.jpeg", /* Etihad 787 wing*/
    "/images/IMG_3750.jpeg", /* Etihad 777*/
    "/images/IMG_4614.jpeg", /* Easyjet A320*/
    "/images/Image 29-01-2026 at 21.28.jpeg", /* Easyjet A320 + Sean*/
    "/images/IMG_3630.jpeg", /* Easyjet A320 wing*/
    "/images/IMG_3347.jpeg", /* Norse 787*/
    "/images/IMG_3330.jpeg", /* Indigo A320 wing*/
    "/images/Screenshot 2025-12-09 at 20.30.49.jpeg", /* Indigo A320*/
    "/images/IMG_2985.jpeg", /* Bangkok Airways A320 wing*/
    "/images/IMG_2959.jpeg", /* Aeroflot 777*/
    "/images/IMG_0713.jpeg", /*Bangkok Airways ATR underside*/
    "/images/IMG_0699.jpeg", /* Bangkok Airways A320 underside*/
    "/images/IMG_2874.jpeg", /* Indigo A320*/
    "/images/IMG_1973.jpeg", /* Indigo A320 + Sean*/
    "/images/IMG_2851.jpeg", /* Saudia 777*/
    "/images/IMG_1974.jpeg", /* Norse 787 interior + Sean*/
    "/images/IMG_2834.jpeg", /* Norse 787 intiero*/
    "/images/IMG_2754.jpeg", /* Indigo 787*/
    "/images/IMG_2753.jpeg", /* BA A320*/
    "/images/IMG_2052.jpeg", /* BA A320 wing*/
    "/images/IMG_2044.jpeg", /* BA A320*/
    "/images/IMG_6268.jpeg", /* BA A320 nose*/
    "/images/IMG_2026.jpeg", /* Iceland 757*/
    "/images/IMG_1956.jpeg", /* Lufthansa A350*/
    "/images/IMG_1768.jpeg", /* Thai A320 wing*/
    "/images/IMG_1953.jpeg", /* Thai A320*/
    "/images/IMG_1661.jpeg", /* Thai A350 wing*/
    "/images/IMG_1630.jpeg", /* Thai A350 wing*/
    "/images/IMG_1595.jpeg", /* BA A320 wing*/
    "/images/IMG_1590.jpeg", /* Singpaore A380*/
    "/images/IMG_1138.jpeg", /* Ethiopian A350 wing*/
    "/images/IMG_1136.jpeg", /* Ethiopian A350*/
    "/images/IMG_1002.jpeg", /* Flysafair 737 + Sean*/
    "/images/IMG_9301.jpeg", /* Flysafair 737*/
    "/images/IMG_0871.jpeg", /* Rwandair A330 + Sean*/
    "/images/IMG_0869.jpeg", /* Rwandair A330*/
    "/images/IMG_0857.jpeg", /* Rwandair A330 wing*/
    "/images/Screenshot 2025-01-16 at 18.58.15.jpeg", /* SAS A320s*/
    "/images/IMG_7798.jpeg", /* SAS A320*/
    "/images/IMG_0475.jpeg", /* Turkish A350 wing*/
    "/images/IMG_1129.jpeg", /* Turkish A350*/
    "/images/IMG_0134.jpeg", /* Saudia 787 wing*/
    "/images/IMG_7446.jpeg", /* Shenzhen A320*/
    "/images/IMG_1885.jpeg", /* Shenzhen A330 wing*/
    "/images/IMG_7070.jpeg", /* Ryanair 737*/
    "/images/IMG_1383.jpeg", /* Ryanair 737 wing*/
    "/images/IMG_6188.jpeg", /* Pacific A320 wing*/
    "/images/IMG_5389.jpeg", /* Pacific A320*/
    "/images/IMG_6163.jpeg", /* China Airlines A350*/
    "/images/IMG_0116.jpeg", /* Vietnam A320*/
    "/images/IMG_1140.jpeg", /* Air China 747*/
    "/images/IMG_1093.jpeg", /* Lufthansa 747*/
    "/images/IMG_0964.jpeg", /* Ryanair 737*/
    "/images/IMG_0863.jpeg", /* Ryanair 737 nose*/
    "/images/IMG_0549.jpeg", /* Thai 777*/
    "/images/IMG_0539.jpeg", /* AirFrance Tails*/
    "/images/IMG_0332.jpeg", /* Saudia 787*/
    "/images/IMG_4574.jpeg", /* Saudia A320 + Sean*/
    "/images/IMG_0247.jpeg", /* BA A320 cockpit + Sean*/
    "/images/IMG_0242.jpeg", /* BA A320 wing*/
    "/images/IMG_3764.jpeg", /* Ryanair Tail*/
    "/images/IMG_1045.jpeg", /* United 787*/
    "/images/IMG_3419.jpeg", /* Qantas 737*/
    "/images/IMG_3416.jpeg", /* Qantas A330 + Sean*/
    "/images/IMG_0775.jpeg", /* Singapore 737*/
    "/images/IMG_3108.jpeg", /* Thai 777 + Sean*/
    "/images/IMG_3085.jpeg", /* BA A320 + Sean*/
    "/images/IMG_0466.jpeg" /* BA A320 wing*/
  ];

export default function Gallery() {
  const [loadedSet, setLoadedSet] = useState(new Set());
  const [thumbs, setThumbs] = useState({});

  const markLoaded = (idx) => {
    setLoadedSet((s) => {
      const next = new Set(s);
      next.add(idx);
      return next;
    });
  };

  // Helper to extract base filename and generate srcset URLs
  const getResponsiveImg = (url, idx) => {
    // Extract base name without extension (e.g., /images/IMG_4637.jpeg -> IMG_4637)
    const lastSlash = url.lastIndexOf('/');
    const lastDot = url.lastIndexOf('.');
    const dir = url.slice(0, lastSlash + 1);
    const name = url.slice(lastSlash + 1, lastDot);

    // srcset for WebP variants
    const webpSrcset = `
      ${dir}${name}-400.webp 400w,
      ${dir}${name}-800.webp 800w,
      ${dir}${name}-1200.webp 1200w
    `.trim();

    // srcset for JPEG fallback variants
    const jpegSrcset = `
      ${dir}${name}-400.jpeg 400w,
      ${dir}${name}-800.jpeg 800w,
      ${dir}${name}-1200.jpeg 1200w
    `.trim();

    // sizes: on mobile use full width, on desktop use ~50% grid column
    const sizes = '(max-width: 640px) 100vw, 50vw';
    const thumbUrl = thumbs[idx];

    return { webpSrcset, jpegSrcset, sizes, thumbUrl, dir, name };
  };

  useEffect(() => {
    let mounted = true;

    // helper to try load a thumbnail version (filename-thumb.ext)
    const tryLoadThumb = (url, idx) => {
      const parts = url.split(".");
      if (parts.length < 2) return;
      const ext = parts.pop();
      const base = parts.join(".");
      const thumbUrl = `${base}-thumb.${ext}`;
      const img = new Image();
      img.src = thumbUrl;
      img.onload = () => {
        if (!mounted) return;
        setThumbs((t) => ({ ...t, [idx]: thumbUrl }));
      };
    };

    // progressive preloading: load first N eagerly, then the rest sequentially
    const firstN = 8;

    const loadFull = (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({ src, ok: true });
        img.onerror = () => resolve({ src, ok: false });
      });

    // try gather thumbs quickly
    photos.forEach((p, i) => tryLoadThumb(p, i));

    // load first N in parallel
    Promise.all(photos.slice(0, firstN).map((p, i) => loadFull(p))).then((results) => {
      if (!mounted) return;
      results.forEach((r, idx) => {
        if (r.ok) markLoaded(idx);
      });
      // preloaded flag removed; using per-image loadedSet instead

      // now background preload the rest sequentially with small delay
      (async () => {
        for (let j = firstN; j < photos.length; j++) {
          // eslint-disable-next-line no-await-in-loop
          await loadFull(photos[j]);
          if (!mounted) break;
          markLoaded(j);
          // small pause to avoid saturating network
          // eslint-disable-next-line no-await-in-loop
          await new Promise((r) => setTimeout(r, 120));
        }
      })();
    });

    return () => {
      mounted = false;
    };
  }, []); // photos is module-level so effect can remain empty

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Photo Gallery</h1>
        <p className="gallery-subtitle">
          A collection of my aviation photos from around the world! (in chronological order)
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((url, i) => {
          const { webpSrcset, jpegSrcset, sizes, thumbUrl, dir, name } = getResponsiveImg(url, i);
          const isLoaded = loadedSet.has(i);

          return (
            <div className="gallery-item" key={i}>
              {isLoaded ? (
                <picture>
                  <source type="image/webp" srcSet={webpSrcset} sizes={sizes} />
                  <img
                    src={`${dir}${name}-800.jpeg`}
                    srcSet={jpegSrcset}
                    sizes={sizes}
                    alt={`Gallery ${i}`}
                    className="loaded"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              ) : thumbUrl ? (
                <img
                  src={thumbUrl}
                  alt={`Gallery thumb ${i}`}
                  className="loading"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="gallery-placeholder" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
