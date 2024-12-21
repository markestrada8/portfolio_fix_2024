import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// import contactPic from "../../../static/assets/images/contact/contact-page.jpg"
import contactPic from '../../../static/assets/images/contact/contact-page.jpg'


export default function () {
  return (
    <div className="content-page-container">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="contact-bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">(615) 938-0355</div>
          </div>
          <div className="contact-bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">markestrada8@gmail.com</div>
          </div>
          <div className="contact-bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Nashville, TN</div>
          </div>
        </div>
      </div>
    </div>
  )
}
