import React from 'react';
import './userprofile.css';

const user = {
  name: 'John Smith',
  imageUrl: 'https://cdn.discordapp.com/attachments/300350229356740620/1217609410411761664/IMG_2996.png?ex=6604a621&is=65f23121&hm=55a464329e8a605ddf13c43fc88747c018483190d04846cde1aff7163bcc46f4&',
};

export default function Profile() {
  return (
    <div className="profile-container">
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      />
      <h1 className="profile-name">{user.name}</h1>
    </div>
  );
}
