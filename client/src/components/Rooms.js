import React, { Component } from "react";
import serena from "./images/serena.jfif";
import serenaroom from "./images/serenaroom.jfif";
import serenaview from "./images/serenaview.jfif";
class Rooms extends Component {
  render() {
    return (
      <div>
        <div className="search-bar ">
          <input type="date" name="date" placeholder="Start Date" />
          <input type="search" name="search" placeholder="search hotel" />
        </div>
        <div className="container-room">
          <img src={serena} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Serena Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serenaroom} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Casa Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serenaview} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Lemigo Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serena} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Mariot Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serenaroom} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Galileo Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serenaview} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Le Petit Prince Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serena} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Virunga Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
        <div className="container-room">
          <img src={serenaroom} alt="logo" className="logo-img" />
          <div className="desc">
            <h2 className="name">Le Souffle Hotel</h2>
            <h3>
              Spot ON 37669 HOTEL LEMIGO LODGE NEAR REGIMENTAL BAZAAR,SHIVAJ
              NAGAR,HYDERABAD
            </h3>
            <p>parking,Reception,Free Wifi</p>
            <h4>Max Count:5</h4>
            <h4>Phone Number:250 722 999 886</h4>
            <h4>Type:Delux</h4>
            <div className="butoon">
            <button>View Details</button>
            <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rooms;
