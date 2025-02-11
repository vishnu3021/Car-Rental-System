import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Cards from "./Card";
import { Link } from "react-router-dom";
import "./carsData.css";
import { cars } from "./CarsDataMain";

export default function CarsData() {
   const [filteredCars, setFilteredCars] = useState(cars);
  const filterCars = (type) => {
    if (type === "All") {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) => car.type === type);
      setFilteredCars(filtered);
    }
  };
  return (
    <div className="carsmain">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap:"1em",
          margin: "0.9em",
          // backgroundColor: "#ceff00",
        }} className="buttons"
      >
        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => {
            filterCars("All");
          }}
        >
          ALL
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={() => {
            filterCars("Petrol");
          }}
        >
          Petrol
        </Button>
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => {
            filterCars("Diesel");
          }}
        >
          Diesel
        </Button>
        <Button
          variant="outline-warning"
          size="lg"
          onClick={() => {
            filterCars("EV");
          }}
        >
          EV
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // marginTop: "1em",
        marginLeft:'5px'
        }}
      >
        {filteredCars.map((cars, index) => {
          return (
            <div key={index} style={{
         margin:"1%"
            }}>
              <Cards
                image={cars.image}
                brand={cars.brand}
                model={cars.model}
                CarType={cars.carType}
                BrandName={cars.BrandName}
                id={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
