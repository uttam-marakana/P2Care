import React from "react";
import Doctor_Card from "./Doctor_Card";
import Member_Img from "assets/img/member.png";

function Doctor_Profile() {
  return (
    <>
      <div className="doc_2 d-flex flex-wrap justify-content-center gap-3">
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
        <Doctor_Card
          img={Member_Img}
          title="Dr. Addition Smith"
          sec="Dentist"
          profile="/"
        />
      </div>
    </>
  );
}

export default Doctor_Profile;
