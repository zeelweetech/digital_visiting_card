import React from "react";

function CardDetails({ cardType }) {
  const DigitalCard = [
    {
      Title: "Title",
      CardName: "Personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "Personal",
    },
  ];

  const filteredCards = cardType ? DigitalCard.filter(card => card.CardName === cardType) : DigitalCard;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 px-4 sm:px-10 lg:px-20 py-10">
        {filteredCards.map((CardData, index) => (
          <div key={index} className="text-center">
            <div className="max-w-xs sm:max-w-sm lg:max-w-md rounded overflow-hidden bg-white border-2 shadow-lg h-44 mx-auto">
              <div className="px-4 sm:px-6 lg:px-8 py-4">
                <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 text-center">{CardData.Title}</div>
              </div>
            </div>
            <p className="text-lg sm:text-xl lg:text-xl font-semibold pt-3">{CardData.CardName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDetails;
