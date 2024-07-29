import React from "react";
import PersonalBusinessCard from "./PersonalBusinessCard";
import PersonalContactCard from "./PersonalContactCard";
import PersonalDetailsCrad from "./PersonalDetailsCard";
import PersonalLinksCard from "./PersonalLinksCard";
import PersonalPreviewCard from "./PersonalPreviewCard";
import PersonalThemeCard from "./PersonalThemeCard";

function PersonalCard() {
  return (
    <diV>
      <PersonalBusinessCard />
      <PersonalContactCard />
      <PersonalDetailsCrad />
      <PersonalLinksCard />
      <PersonalPreviewCard />
      <PersonalThemeCard />
    </diV>
  );
}

export default PersonalCard;
