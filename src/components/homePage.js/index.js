import React, { useEffect } from "react";
import CardDetails from "./CardDetails";
import Cardbutton from "./Cardbutton";
import Header from "../Header";
import { decodedToken } from "../../utils";
import { getAllCardDetails } from "../../services/ProfileServices";

function Home() {
  const { userId } = decodedToken();

  useEffect(() => {
    GetAllCardDetails();
  }, []);

  const GetAllCardDetails = async () => {
    await getAllCardDetails({ id: userId })
      .then((res) => {
        console.log("res***", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <div className="mt-16">
        <Header />
      </div>
      <div>
        <Cardbutton />
        <CardDetails />
      </div>
    </div>
  );
}

export default Home;
