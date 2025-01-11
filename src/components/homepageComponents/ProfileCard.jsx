import Image from "next/image";
import React from "react";

const ProfileCard = ({ redirectUrl, profile, batch, name, company }) => {
  return (
    <a href={redirectUrl} target="_blank" className="profile_card">
      <div className="profile_card_image">
        <Image
          src={profile}
          alt="FoodVerse"
          className="profile_card_person"
          width={100}
          height={100}
        />
        <Image
          src={batch}
          alt="FoodVerse"
          className="profile_card_batch"
          width={25}
          height={25}
        />
      </div>
      <p
        className="profile_card_name"
        style={{ fontFamily: "Rubik", fontWeight: 800 }}
      >
        {name}
      </p>
      <p
        className="profile_card_company"
        style={{ fontWeight: 400, opacity: 0.8 }}
      >
        {company}
      </p>
    </a>
  );
};

export default ProfileCard;
