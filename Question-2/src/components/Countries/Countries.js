import React from "react";
import "./styles/style.css";

class Countries extends React.Component {
  state = {
    countries: [
      {
        id: 1,
        name: "Iran",
        capital: "Tehran",
        OfficialLanguage: "Farsi",
        imageSource: require("./images/Iran.JPG"),
      },
      {
        id: 2,
        name: "Australia",
        capital: "Canberra",
        OfficialLanguage: "English",
        imageSource: require("./images/Australia.JPG"),
      },
      {
        id: 3,
        name: "USA",
        capital: "Washington D.C.",
        OfficialLanguage: "English",
        imageSource: require("./images/USA.JPG"),
      },
      {
        id: 4,
        name: "Russia",
        capital: "Moscow",
        OfficialLanguage: "Russian",
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
        name: "Lebanon",
        capital: "Beirut",
        OfficialLanguage: "Lebanese",
        imageSource: require("./images/Lebanon.JPG"),
      },
      {
        id: 7,
        name: "Lebanon",
        capital: "Beirut",
        OfficialLanguage: "Lebanese",
        imageSource: require("./images/Lebanon.JPG"),
      },
      {
        id: 8,
        name: "Lebanon",
        capital: "Beirut",
        OfficialLanguage: "Lebanese",
        imageSource: require("./images/Lebanon.JPG"),
      },
      {
        id: 9,
        name: "Argentina",
        capital: "Buenos Aires",
        OfficialLanguage: "Spanish",
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
              <p>Official Language: {country.OfficialLanguage}</p>
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
