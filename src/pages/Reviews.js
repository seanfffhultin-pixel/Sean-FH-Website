import React from "react";

// ✨ Add your reviews below — just copy/paste the template!
const reviews = [
  {
  airline: "Etihad",
  flight: "EY489 KUL → AUH",
  date: "January 2026",
  rating: 5,
  img: "https://i.postimg.cc/GtdC1FJ8/654EEC28-431E-4D86-95C1-0BA5187DCBA3.png",
  text: "This was probably the most flawless flight I've taken in a LONG TIME, and definitely the best Etihad flight I took on this trip. We started off in Kuala Lumpur, and got to the airport, now I do have a few comments on the airport's interesting design but I'll leave that for the video, anyway, we got onto the plane and although the seats lacked the cool remotes that the 787-9 had, this 787-10 was still very nice, with very comfy seats, and one of the largest pillows I've ever seen in economy class, as well as a very fluffy blanket. The IFE was also very good, much better than the 777 I'd flown earlier in the trip, a much wider selection of everything, and just a much larger and higher resolution screen! The food was, like last time, great, with plenty of options - including a classic pasta dish, some mash with beef, and a chicken and rice option, all served with the usual sides. And of course, this flight wasn't that long (~7 hours) so I wasn't expecting a second meal service. However, they did come round with drinks mulitple times and towards the end served OREOS (with a more extensive dinks selection of course) - I believe they did have a little snack bar at the rear galley but I didn't check... So overall, this was a great flight with flawless... EVERYTHING! I applaud Etihad for this brilliant flight!"
},
  {
  airline: "Cathay Pacific",
  flight: "CX789 HKG → BKK",
  date: "December 2025",
  rating: 5,
  img: "https://i.postimg.cc/Bnzz4TBW/Image.png",
  text: "This is one of the flights that I have been looking forward to since I booked it, I've always wanted to fly Cathay Pacific and although this flight was only ~3 hours long, it more than lived up to the hype that the internet had fed me, it exceeded it with flying colors! I started of this flight at Hong Kong's Chek Lap Kok airport - the one with the bridge - and we boarded the beauty, the A330. The crew's service was top-notch and I very much enjoyed the massive selection on offer on Cathay's IFE. As well as this, Cathay's in-house catering in Hong Kong did a fantastic job with the food, very delicious - it even came with complementary ICECREAM! Although the cabin was a little dated, and maybe the flight was shorter than I had hoped, and maybe I didn't get to try Cathay's FULL Long-Haul experience, I was more than happy with this flight, and a massive upgrade from the competition - the likes of THAI (sorry), AirAsia, Hong Kong Express (which is owned by Cathay Pacific) etc. Overall, this flight was great, VERY NICE, I would 100% do it again (maybe even long-haul in the future??)!"
},
  {
  airline: "SPECIAL Etihad (non Youtube review)",
  flight: "EY870 AUH → HKG",
  date: "December 2025",
  rating: 5,
  img: "https://i.postimg.cc/qvf8xdW5/Screenshot-2026-02-11-at-22-26-44.png",
  text: "I was heavily debating not including this review as it was not filmed for YouTube, but it was one of the most eventful flights of my life. So this was meant to just be a normal flight from Abu Dhabi to Hong Kong, the usual Etihad experience, with a great seat (including cool remote controls - I made a YT short about that). But when we arrived into Hong Kong and got to the gate, we were told to sit down and check our valuables if anything had been STOLEN! WE WERE WAITING FOR THE POLICE!!! It turns out that a group of coordinated asian men had stolen a diamond necklace and diamond ring from a passenger who I only assume had brought it to Hong Kong to get good luck? Anyway, the police boarded our aircraft and started going to specific rows where those men had sat, they then proceeded to rip apart the seats, tearing of the seat cushions and pointing flashlights down the ridges. After about half an hour of this and a few men being escorted off the plane with luggage to be searched in a seperate jet bridge, we were let off the plane. What a crazy experience, too bad I didn't film the flight or anything - I could've started then and there, but then again I don't want trouble with Chinese police! But overall the flight was pretty good, but nothing too much different from a similar Etiahd flight I reviewed later in the trip (though on the 787-10 instead of the -9 (the -9 has remote controls and the -10 does not)). But still a crazy experience!!! ---------------- It turns out the men are adjacent to the Hong Kong mafia and are made to go onto these flights and steal valuables - it is also a repeated thing (has happened something like 5 times already!), and on this route aswell, which is a little worrying! there is a really detailed article about this incident on Simple flying, go check that out for more!"
},
  {
  airline: "Etihad",
  flight: "EY58 BRU → AUH",
  date: "December 2025",
  rating: 5,
  img: "https://i.postimg.cc/HnZyyqXt/Image.png",
  text: "This is one of Etihad's oldest aircraft, and it does show, from older IFE moniters, dated cabin design to fairly worn seats, you could tell this aircraft was nearly 14 years old, however I do commend Etihad for keeping it in such good condition and reupolstering the seats with the new design. All together I found the crew were very attentive and friendly, the food included options like beef and mash, chicken and rice or some curry, and the content on option was extensive, maybe not as much as the newer A350s (hint hint) but still miles ahead than the likes of Norse/Indigo. I really enjoyed this flight and I'm very glad we got seats in the last few rows where the cabin is slimmer so it is configured 2-4-2 instead of 3-4-3, otherwise I think my experience would have been a litttle different. Overall, Etihad blew away my expectations and I have alot more Etihad content to come. PLUS Etihad's hub in Abu Dhabi is georgous - a beautiful blend of modern architecture and traditional sandy destert tones! Very easy to transit in - very fast, and a great amount of shops and restaurants to pass time. (though our connections were very close together!)"
},
  {
  airline: "EasyJet",
  flight: "U25707 SEN → AMS",
  date: "December 2025",
  rating: 4,
  img: "https://i.postimg.cc/vmp70xLS/Image.png",
  text: "Southend Airport has always been special to me, being the smallest London airport it means the experience is super quick and efficient, though the shops airside were a little underwhelming I still was very impressed - it is now my favourite London Airport! This was one of the most exciting flights I've taken in a while, and it was a great way to kick off the trip. The flight was smooth and uneventful, but the highlight was the beauftiful view over the English channel and the incredible landing into the foggiest airport I've ever seen, literally under 20 meters visibility. The crew was friendly and efficient, and the overall experience was enjoyable, making it a memorable start to an exciting series of flights."
},
  {
  airline: "IndiGo",
  flight: "6E1052 BKK → BOM",
  date: "November 2025",
  rating: 3,
  img: "https://i.postimg.cc/6QrdqSth/Image.png",
  text: "The flight was uneventful and typical for the route. Check-in was slow, but the Coral Lounge made the wait more comfortable. The crew provided water during the delay, and while snacks and drinks were available for purchase, I stuck with my own. Aside from flying past a large cloud, the flight passed quickly, giving time to relax and watch downloaded content before landing near Mumbai."
},
  {
  airline: "Bangkok Airways",
  flight: "PG272 HKT → BKK",
  date: "October 2025",
  rating: 5,
  img: "https://i.postimg.cc/gcS3x3Ft/Image.png",
  text: "The short Bangkok Airways flight was quick and straightforward. Airport check-in and security were fast, lounges offered decent food and snacks (especially popcorn!), and boarding was organized despite a slight delay. The plane was noticeably old, but the seats and service were adequate, with a timely lunch and drinks service. The flight itself felt very short, and before long, we were already descending into Suvarnabhumi."
},
  {
    airline: "IndiGo (Norse Lease)",
    flight: "6E22 AMS → BOM",
    date: "October 2025",
    rating: 4,
    img: "https://i.postimg.cc/fbN9GKmX/Image.png",
    text: "What started as a stressful check-in experience turned into a surprisingly smooth and memorable flight. We managed to get seats together and ended up with a free middle seat, enjoyed some unexpected Norwegian–Norse quirks on board, and even spotted a shooting star mid-flight. Despite small inconveniences like dimmed windows, limited charging ports, and slow meal collection, the crew, the atmosphere, and the smooth landing into Mumbai made the journey far better than expected."
},
  {
    airline: "Thai Airways",
    flight: "TG136 BKK → CEI",
    date: "August 2025",
    rating: 4,
    img: "https://i.postimg.cc/qvXsMSkp/Image.png",
    text: "The Thai Airways flight was smooth and enjoyable. The seat was comfortable, though lacking in-seat charging, and the taxi around Suvarnabhumi gave a great opportunity to spot rare aircraft parked at the airport—a common practice for short-haul and regional flights. Takeoff offered beautiful views of Bangkok and the airport, and the cabin experience was fun with ceiling screens displaying brief ads and attentive crew handing out goody bags and drinks. The scenic Thai landscape made the flight even more pleasant, and the attentive service added a nice personal touch, making this short hop a very enjoyable experience."
},
  {
    airline: "Thai Airways",
    flight: "TG955 OSL → BKK",
    date: "August 2025",
    rating: 5,
    img: "https://i.postimg.cc/vm055ngj/Image.png",
    text: "The flight was comfortable, efficient, and very well-serviced. Despite the initial rush at the airport and a lost bag reminder, boarding was smooth, and the seat offered good legroom, recline, and amenities including USB and universal power ports. The IFE was solid with movies, TV, and extras like a moving map and exterior camera. Meals were tasty and thoughtfully presented, and the crew kept the cabin and toilets spotless throughout. Combined with a smooth takeoff, decent sleep, and sunrise views before landing, the flight provided a pleasant and enjoyable journey."
},
  {
    airline: "Ethiopian Airlines",
    flight: "ET808 JNB → ADD",
    date: "April 2025",
    rating: 5,
    img: "https://i.postimg.cc/j59NFrX0/Image.png",
    text: "The first Ethiopian A350 flight was a genuinely impressive experience. While the safety video felt amateur and unintentionally funny, everything else about the product exceeded expectations: a comfortable seat, excellent charging options, decent IFE, and surprisingly delicious food with multiple choices. The adjustable headrest made a big difference for taller passengers, and the distant thunderstorm over Kenya created an unforgettable in-flight moment. In all, it was a comfortable, well-equipped, and memorable flight."
},
  {
    airline: "FlySafair",
    flight: "FA478 HLA → DUR",
    date: "April 2025",
    rating: 3,
    img: "https://i.postimg.cc/V5PtzBpb/Image.png",
    text: "The flight was simple but comfortable. The paid snacks and drinks were expected, and while the cabin had thin, non-reclining seats similar to Ryanair, the legroom was good. Boarding and deboarding were very orderly, with the crew managing groups efficiently, which made exiting smooth and stress-free. Despite the basic setup, the flight was generally a good and comfortable experience."
},
  {
  airline: "Rwandair",
  flight: "WP700 & WP108 CDG → JNB (via KGL)",
  date: "April 2025",
  rating: 3,
  img: "https://i.postimg.cc/bYsTwTV2/Image.jpg",
  text: "The flight had a mixed experience. Boarding was fast but chaotic, and while the IFE initially had issues, it eventually worked well with plenty of movies to choose from. The abundance of juice options and a solid six hours of sleep were definite highlights, though minor annoyances like outdated moving maps, lack of WiFi, and repeated ads for Rwanda detracted slightly. Meals were basic but sufficient, and the cabin lighting created a nice sunrise effect. While not the airline’s best offering, the flight was manageable, comfortable in parts, and got us safely to our destination despite earlier delays."
},
  {
  airline: "Turkish Airlines",
  flight: "TK209 & TK1983 SIN → LHR (via IST)",
  date: "January 2025",
  rating: 5,
  img: "https://i.postimg.cc/2jMxbZgg/Image.jpg",
  text: "The flight on the A350 was a mix of highs and minor annoyances. The seat, legroom, and amenity kit were excellent, and the IFE offered an impressive selection of movies and shows, even if some ads were annoying and Bluetooth headphones couldn’t connect. Meals were enjoyable, and the ambient lighting created a relaxing atmosphere, though the cabin felt warm and the crew rarely interacted during dimmed periods. Boarding and airport procedures were crowded but manageable, and the landing was a bit firm. Despite small frustrations, the flight was comfortable, entertaining, and a solid experience overall."
},
  {
  airline: "AirAsia",
  flight: "FD355 DMK → SIN",
  date: "January 2025",
  rating: 4,
  img: "https://i.postimg.cc/Z5hFjhby/Image.png",
  text: "The flight and airport experience were fairly straightforward but a bit chaotic. Don Mueang’s small size and strict baggage rules made things hectic, especially at passport control and security, but boarding went smoothly, and a friendly seat swap made the flight more comfortable. The flight itself was uneventful, though the landing offered spectacular city views. Changi Airport and the Crowne Plaza stay added convenience and comfort, making the overall journey smooth despite the minor chaos at Don Mueang."
},
  {
  airline: "Saudia",
  flight: "SV844 JED → BKK",
  date: "December 2024",
  rating: 5,
  img: "https://i.postimg.cc/Wb00dfMy/Image.jpg",
  text: "The flight was decent—not great, but not terrible. The crew was thoughtful, the amenities and care kits were a nice touch, and the IFE offered a strong music selection, including multiple Taylor Swift albums. Meals were hit-or-miss, and the lack of WiFi, Bluetooth, and pizza sauce were minor annoyances. Despite some small technical hiccups and locked windows, the 787 provided a comfortable journey, topped off with a smooth landing on Bangkok’s new runway 02L."
},
  {
  airline: "British Airways",
  flight: "BA322 LHR → CDG",
  date: "December 2024",
  rating: 4,
  img: "https://i.postimg.cc/Wb00dfGh/Image.png",
  text: "The journey was mostly smooth despite a slight delay and very late baggage arrival. The lounge visit helped pass the time comfortably, and the food was enjoyable, scoring around 5–8/10. Even with the minor hiccups, the flight experience was pleasant and manageable."
},
  // ⭐⭐ TEMPLATE ⭐⭐
  // {
  //   airline: "",
  //   flight: "",
  //   date: "",
  //   rating: 0,
  //   img: "",
  //   text: ""
  // },
];

export default function Reviews() {
  return (
    <section className="reviews-page">
      <div className="reviews-header">
        <h2 className="reviews-title">Flight Reviews</h2>
        <p className="reviews-subtitle">My written airline & flight reviews. ...More coming soon!</p>
      </div>

      {reviews.length === 0 ? (
        <div className="no-reviews">
          <h3>🚧 No Reviews Yet</h3>
          <p>No written reviews are available at the moment — sorry!</p>
          <p>Check back soon — new content is on the way ✈️</p>
        </div>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              {review.img && (
                <div className="review-img-wrapper">
                  <img src={review.img} alt={`${review.airline} flight`} />
                </div>
              )}
              <div className="review-content">
                <h3 className="review-airline">{review.airline}</h3>
                <p className="review-flight">{review.flight}</p>
                <p className="review-date">{review.date}</p>
                <p className="review-rating">
                  {"⭐".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
                <p className="review-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}