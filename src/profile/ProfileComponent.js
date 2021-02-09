import React from "react";
import Child from "./Child";
import photo from "./photo.jpg";

const handleName = (name) => {
  alert(` welcome ${name}`);
};
const ProfileComponent = () => {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <Child
        fullname="Mahdi Dimassi"
        bio={
          "Experience professionnel: technico commercial a hygiène et prévention "
        }
        profession={"Devloppeur full stack js"}
        photo={photo}
        handleName={handleName}
      />
    </div>
  );
};

export default ProfileComponent;
