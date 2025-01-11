import Image from "next/image";
import React from "react";

const teamData = [
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/kayaash.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/kayaashAvatar.png",
    name: "Kayaash",
    role: "Marketing Lead",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/tahir.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/tahirAvatar.png",
    name: "Tahir",
    role: "Blockchain Lead",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/ashwin.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/ashwinAvatar.png",
    name: "Ashwin",
    role: "Developer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/manu.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/manuAvatar.png",
    name: "Manu",
    role: "Art Lead",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/shubham.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/shubhamAvatar.png",
    name: "Shubham",
    role: "Developer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/himanshu.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/himanshuAvatar.png",
    name: "Himanshu",
    role: "Developer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/navid.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/navidAvatar.png",
    name: "Navid",
    role: "Developer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/shraddha.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/shraddhaAvatar.png",
    name: "Shraddha",
    role: "Developer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/shiva.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/shivaAvatar.png",
    name: "Shiva",
    role: "Senior Artist",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/mayur.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/mayurAvatar.png",
    name: "Mayur",
    role: "3D Artist",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/anish.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/anishAvatar.png",
    name: "ANISH",
    role: "Designer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/ayushi.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/ayushiAvatar.png",
    name: "Ayushi",
    role: "Designer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/sneha_d.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/snehaDAvatar.png",
    name: "Sneha Devc",
    role: "Designer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/sneha_p.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/snehaPAvatar.png",
    name: "Sneha P",
    role: "Designer",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/ela.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/elaAvatar.png",
    name: "Ela",
    role: "Content Strategist",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/alex.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/alexAvatar.png",
    name: "Alex",
    role: "Content Strategist",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/aadil.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/aadilAvatar.png",
    name: "Aadil",
    role: "Partnerships",
  },
  {
    image:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/pankaj.png",
    avatar:
      "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/pankajAvatar.png",
    name: "Pankaj",
    role: "Community",
  },
];

const TeamPage = () => {
  return (
    <div className="team">
      <div className="team_container">
        <h1 className="team_hero_title">Humans of OneRare</h1>
        <div className="team_hero">
          <Image
            src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/team_bg.svg"
            alt="FoodVerse Team"
            className="team_hero_bg"
            width={1200}
            height={600}
          />
          <div className="team_hero_card">
            <div className="hero_card_left">
              <Image
                src={
                  "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/supreetAvatar.png"
                }
                alt="SUPREET RAJU"
                className="hero_avatar"
                width={180}
                height={180}
              />
              <Image
                src={
                  "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/supreet.png"
                }
                alt="SUPREET RAJU"
                className="hero_image"
                width={180}
                height={180}
              />
            </div>
            <div className="hero_card_right">
              <p className="card_name">
                SUPREET RAJU
                <br />
                <span>Co-Founder</span>
              </p>
              <p className="card_brief">
                Supreet is a Gold medallist & an award-winning Designer. She
                came up with the vision for OneRare and is responsible for the
                complete visual & interactive experience of our Foodverse.{" "}
              </p>
              <div className="card_social">
                <a
                  href="https://www.linkedin.com/in/supreetraju/"
                  target="_blank"
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/linkedin.png"
                    alt="FoodVerse LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://twitter.com/supreetraju" target="_blank">
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/twitter.png"
                    alt="FoodVerse Twitter"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="team_hero_card">
            <div className="hero_card_left">
              <Image
                src={
                  "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/avatars/gauravAvatar.png"
                }
                alt="GAURAV GUPTA"
                className="hero_avatar"
                width={180}
                height={180}
              />
              <Image
                src={
                  "https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/team/gaurav.png"
                }
                alt="GAURAV GUPTA"
                className="hero_image"
                width={180}
                height={180}
              />
            </div>
            <div className="hero_card_right">
              <p className="card_name">
                GAURAV GUPTA
                <br />
                <span>Co-Founder</span>
              </p>
              <p className="card_brief">
                Gaurav is our Swiss Army knife with years of experience helping
                scale Web3 projects. With his Engineering education, Gaurav
                leads our Tech vision & Marketing initiatives to grow OneRare.
              </p>
              <div className="card_social">
                <a
                  href="https://www.linkedin.com/in/gauravgupta99/"
                  target="_blank"
                >
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/linkedin.png"
                    alt="FoodVerse LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://twitter.com/gaurav_gupta9" target="_blank">
                  <Image
                    src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/assets/images/twitter.png"
                    alt="FoodVerse Twitter"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team_full">
          {teamData?.map((team, i) => (
            <div className="team_card" key={i}>
              <div className="img_container">
                <Image
                  src={team.avatar}
                  alt={team.name}
                  className="avatar"
                  width={145}
                  height={145}
                />
                <Image
                  src={team.image}
                  alt={team.name}
                  className="image"
                  width={145}
                  height={145}
                />
              </div>
              <div className="team_card_detail">
                <p className="team_card_name">{team.name}</p>
                <p className="team_card_role">{team.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team_cv">
          <h2 className="team_cv_title">Want to work in the Foodverse ?</h2>
          <p className="team_cv_text">
            ONERARE TEAM IS EXPANDING !
            <br />
            INTERESTED CANDIDATES CAN SEND IN THEIR CV TO partners@onerare.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
