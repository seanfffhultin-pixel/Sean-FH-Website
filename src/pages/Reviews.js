import React from "react";

// ✨ Add your reviews below — just copy/paste the template!
const reviews = [
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