// src/Profile.tsx
import React from "react";

type ProfileProps = {
  name: string;
  hobby: string;
  bio: string;
};

const Profile: React.FC<ProfileProps> = ({ name, hobby, bio }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>自己紹介</h1>
      <p>
        <strong>名前:</strong> {name}
      </p>
      <p>
        <strong>趣味:</strong> {hobby}
      </p>
      <p>
        <strong>自己紹介:</strong> {bio}
      </p>
    </div>
  );
};

export default Profile;
