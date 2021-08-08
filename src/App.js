import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import {
  CustomerPage,
  VehiclePage,
  ConfirmationPage,
} from "./Components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });
  const [vehicleData, setVehicleData] = useState({
    plateNumber: "",
    carMaker: "",
    carModel: "",
    carManufactureDate: "",
    claimsMadeWithinLast5Years: "",
    drivingYearSinceLicenceReceived: "",
  });

  const [finalData, setFinalData] = useState({ ...clientData, ...vehicleData });
  const dateFormatter = (date) => {
    const dateStr = date.toString();
    const dateArr = dateStr.split(" ");
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[3]}`;
  };
  const handleClientSubmit = (data) => {
    const client = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      dateOfBirth: dateFormatter(data.dob),
    };
    setClientData((prev) => ({
      ...prev,
      ...client,
    }));
  };
  const handleVehicleSubmit = (data) => {
    const vehicle = {
      plateNumber: data.plateNumber,
      carMaker: data.carMaker,
      carModel: data.carModel,
      carManufactureDate: dateFormatter(data.manufactureDate),
      claimsMadeWithinLast5Years: data.previousClaim,
      drivingYearSinceLicenceReceived: data.drivingYear,
    };
    setVehicleData((prev) => ({
      ...prev,
      ...vehicle,
    }));
  };
  const handleFinalSubmit = (data) => {
    console.log(data);
    setFinalData((prev) => ({
      ...prev,
      ...data,
    }));
  };
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <CustomerPage handleClick={handleClientSubmit} />
          </Route>
          <Route path="/vehicle">
            <VehiclePage handleVehicleSubmit={handleVehicleSubmit} />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage
              clientData={clientData}
              vehicleData={vehicleData}
              handleFinalSubmit={handleFinalSubmit}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
