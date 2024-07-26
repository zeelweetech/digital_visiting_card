import React from "react";

function CardDetails() {
  const DigitalCard = [
    {
      Title: "Title",
      CardName: "personal",
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
      CardName: "personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "personal",
    },
    {
      Title: "Title",
      CardName: "Business",
    },
    {
      Title: "Title",
      CardName: "personal",
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
      CardName: "personal",
    },
    {
      Title: "Title",
      CardName: "personal",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-7 px-20 py-10">
        {DigitalCard.map((CardData) => (
          <div className="text-center">
            <div class="max-w-sm rounded overflow-hidden bg-white border-2 shadow-lg h-44">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">{CardData.Title}</div>
              </div>
            </div>
            <p className="text-xl font-semibold pt-3">{CardData.CardName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDetails;
