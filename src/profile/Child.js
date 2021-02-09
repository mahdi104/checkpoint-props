import React from "react";
import { Button } from "react-bootstrap";
import photo from "./photo";

const Child = ({ fullname, bio, profession, photo, handleName }) => {
  return (
    <div>
      <h3
        style={{
          fontFamily: "Nueva Std",
          color: "aqua",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        {fullname}
      </h3>
      <h3
        style={{
          fontFamily: "Nueva Std",
          color: "aqua",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        {bio}
      </h3>
      <h3
        style={{
          fontFamily: "Nueva Std",
          color: "aqua",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        {profession}
      </h3>
      <img src={photo} alt="profile" style={{ width: "25%" }} />
      <Button variant="warning" onClick={() => handleName("Mahdi")}>
        Details
      </Button>
    </div>
  );
};
Child.defaultProps = {
  image:
    "https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg",
  //   title: "inconnu",
  number: 0,
};

export default Child;
