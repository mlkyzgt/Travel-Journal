import React from "react";
import "./main.css";

export default function Main() {
  const destinations = [
    {
      id: "1",
      location: "Japan",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
      title: "Mount Fuji",
      date: "12 Jan, 2021 - 24 Jan, 2021",
      description:
        "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      mapLink: "https://maps.app.goo.gl/xmXB2bA9BBWjJ1Zc9",
    },
    {
      id: "2",
      location: "Australia",
      imageUrl: "./Sydney.png",
      title: "Sydney Opera House",
      date: "27 May, 2021 - 8 Jun, 2021",
      description:
        "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
      mapLink: "https://maps.app.goo.gl/NsL8yKT9neVwkJqb9",
    },
    {
      id: "3",
      location: "Norway",
      imageUrl: "./norway.png",
      title: "Geirangerfjord",
      date: "01 Oct, 2021 - 18 Nov, 2021",
      description:
        "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
      mapLink: "https://maps.app.goo.gl/9RX3RgiZsLNg8QtW8",
    },
  ];

  return (
    <main>
      {destinations.map((destination) => (
        <div key={destination.id} className={destination.location}>
          <img
            className={`${destination.location.toLowerCase()}png`}
            src={destination.imageUrl}
            alt=""
          />
          <div className="texts">
            <h2>
              <img className="yerpng" src="./yerlogo.png" alt="" />{" "}
              {destination.location}{" "}
              <a href={destination.mapLink}>View on Google Maps</a>
            </h2>
            <h1>{destination.title}</h1>
            <h3>{destination.date}</h3>
            <p>{destination.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
