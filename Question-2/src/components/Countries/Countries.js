import React from "react";
import "./styles/style.css";

class Countries extends React.Component {
  state = {
    countries: [
      {
        id: 1,
        name: "Iran",
        capital: "Tehran",
        imageSource: require("./images/Iran.JPG"),
      },
      {
        id: 2,
        name: "Australia",
        capital: "Canberra",

        imageSource: require("./images/Australia.JPG"),
      },
      {
        id: 3,
        name: "USA",
        capital: "Washington D.C.",
        imageSource: require("./images/USA.JPG"),
      },
      {
        id: 4,
        name: "Russia",
        capital: "Moscow",
        imageSource: require("./images/Russia.JPG"),
      },
      {
        id: 5,
        name: "Japan",
        capital: "Tokyo",
        OfficialLanguage: "Japanese",
        imageSource: require("./images/Japan.JPG"),
      },
      {
        id: 6,
        name: "France",
        capital: "Paris",
        imageSource: require("./images/France.JPG"),
      },
      {
        id: 7,
        name: "Lebanon",
        capital: "Beirut",
        imageSource: require("./images/Lebanon.JPG"),
      },
      {
        id: 8,
        name: "Maldives",
        capital: "Male",
        imageSource: require("./images/Maldives.JPG"),
      },
      {
        id: 9,
        name: "Argentina",
        capital: "Buenos Aires",
        imageSource: require("./images/Argentina.JPG"),
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.countries.map((country) => (
          <figure key={country.id} class="countryCard">
            <h2>{country.name}</h2>
            <img src={country.imageSource} alt="" />
            <figcaption>
              <h3>More Info</h3>
              <p>Capital: {country.capital}</p>
            </figcaption>
          </figure>
          // <div key={country.id} className="cardBody">
          //   <span>Country:{country.name}</span>{" "}
          //   <span>Capital:{country.capital}</span>
          //   <img src={country.imageSource} alt={country.name} />
          // </div>
        ))}
      </div>
    );
  }
}

export default Countries;
