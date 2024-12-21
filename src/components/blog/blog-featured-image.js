import React from "react";

export default function BlogFeaturedImage(props) {
  return props.featured_image_url ? (
    <div className="featured-image-wrapper">
      <img src={props.featured_image_url} />
    </div>
  ) : null;
}
