import React from "react";

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: "Flying ECONOMY on IndiGos Hidden Dreamliner (The Norse 787) (Amsterdam - Mumbai)",
      img: "https://i.postimg.cc/xjtd7H43/IN787-3.png",
      link: "https://youtu.be/cs7Wod2ZME4"
    },
    {
      id: 2,
      title: "Ethiopian Airlines SAVED ME! (And They are AMAZING!)",
      img: "https://i.postimg.cc/wMv9HfGQ/Ethiopian-6.png",
      link: "https://youtu.be/WNAmr-5lGGk"
    },
    {
      id: 3,
      title: "You Should Try THIS Thai Sleeper Train!",
      img: "https://i.postimg.cc/28LfwZRW/Sleeper-train.png",
      link: "https://youtu.be/AICcfhtgT90"
    }
  ];

  return (
    <section id="videos" className="videos">
      <h2>Latest Videos</h2>

      <div className="video-grid">
        {videos.map((vid) => (
          <a 
            key={vid.id} 
            href={vid.link} 
            target="_blank" 
            rel="noreferrer" 
            className="video-card"
          >
            <img src={vid.img} alt={vid.title} />
            <h3>{vid.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
