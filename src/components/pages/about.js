import React from "react";
import profilePic from "../../../static/assets/images/bio/new-profile.jpg";

export default function () {
  return (
    <div className="content-page-container">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <p>
          Hello! I am a fullstack developer looking to gain experience and work on
          real-world projects using best-practices and industry standard technologies
          and procedures. This portofolio represents projects I have worked on as well
          as some of my interests.
        </p>
        <p>
          I have a BA in English literature from the University of Tennesse with a minor in
          Classical Civilization. I served in the US Army working in Military Intelligence and
          was stationed in Ft. Hood, TX. I deployed to Iraq in 2008-2009 in support of OIF II.
        </p>
        <p>
          I have been interested in computers off and on through my life, but only
          seriously sat down and started learning to code in December 2021. I was approached
          by someone representing a Veteran Trasition Mission to enroll in a coding bootcamp
          with Bottega University. I enjoyed the practice of solving problems and learning,
          as well as the challenge of learning new technologies and the potential they have for
          solving problems such as the challenge of working remotely during COVID-19 lockdowns.
          I also see the transformative potential of emerging technologies such as AI, ML, IoT,
          and Web3 and am curious to see how they can by used to help us solve the issues we face
          and learn more about ourselves and our world.
        </p>
      </div>
    </div>
  );
}
