import React from 'react';
import './userprofile.css';

const user = {
  name: 'John Smith',
  imageUrl: 'https://cdn.discordapp.com/attachments/300350229356740620/1217609410411761664/IMG_2996.png?ex=66299021&is=66171b21&hm=8c154393ea1af7b4d748826c7a603826c0e46ec417952584ef7bccf80fa20652&',
};

export default function Profile() {
  return (
    <div className="profile-container">
      <img  
        className="avatar"   // Renders an img element with the class name avatar
        src={user.imageUrl} // sets source (src) attribute to the URL specified in imageUrl
       alt={'Photo of ' + user.name} // (alt attribute provides alternative text for accessibility: from terminal when trying to running without an alt)
      />
      <h1 className="profile-name">{user.name}</h1> {/*displays the user's name inside an h1 heading element*/}
    </div>
  );
}
