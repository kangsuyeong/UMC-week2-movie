import React from "react";
import { styled } from "styled-components";

const ProfileImg = styled.img`
  width: 100%;
  height: 15em;
`;
const ProfileName = styled.div`
  font-size: 1em;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
`;

const Profile = ({ credits }) => {
  return (
    <>
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
    </>
  );
};

export default Profile;
