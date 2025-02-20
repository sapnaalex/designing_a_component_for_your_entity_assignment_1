// write the component code here
import React from "react";

const Usercard = () => {
    const profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"; // Placeholder image
    const name = "Sapna Alex";
    const email = "sapnaalex@example.com";
    const phone = "+1 234 567 890";
    const address = "123 Main Street, Cityville, Country";

    return(
        <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
    );
};

export default Usercard;