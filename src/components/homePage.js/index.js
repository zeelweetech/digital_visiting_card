import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import Cardbutton from "./Cardbutton";
import Header from "../Header";
import { decodedToken } from "../../utils";
import { getAllCardDetails } from "../../services/ProfileServices";
import CardsDesign from "./CardsDesign";

function Home() {
  const { userId } = decodedToken();
  const [cardName, setCardName] = useState("");
  const [cardDetails, setCardDetails] = useState();
  const [loading, setLoading] = useState(false);
  console.log("cardName", cardName, cardDetails);
  console.log("*************", cardName);

  useEffect(() => {
    GetAllCardDetails();
  }, [cardName]);

  const GetAllCardDetails = async () => {
    setLoading(true);
    await getAllCardDetails({ id: userId })
      .then((res) => {
        console.log("res***", res);
        const data =
          cardName === ""
            ? res?.cardDetails
            : res?.cardDetails?.filter((item) => {
                return item?.category === cardName;
              });
        console.log("data", data);
        setCardDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="mt-16">
        <Header />
      </div>
      <div>
        <Cardbutton setCardName={setCardName} />
        <CardDetails cardDetails={cardDetails} loading={loading} />
        <CardsDesign cardDetails={cardDetails} loading={loading}/>
      </div>
    </div>
  );
}

export default Home;
