import React from "react";
import { styled } from "styled-components";

const ProfileImg = styled.img`
  width: 100%;
`;
const ProfileName = styled.div`
  font-size: 1em;
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

const Background = styled.div`
  padding: 0 10px;
`;

const Profile = ({ credits }) => {
  return (
    <Background>
      <ProfileImg
        src={
          credits.profile_path
            ? `https://image.tmdb.org/t/p/w500${credits.profile_path}`
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s"
        }
      />
      <ProfileInfo>
        <ProfileName>{credits?.original_name}</ProfileName>
        {credits.character ? (
          <ProfileName>{credits?.character} 역</ProfileName>
        ) : (
          <ProfileName>{credits.job}</ProfileName>
        )}
      </ProfileInfo>
    </Background>
  );
};

export default Profile;
