import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {
        name: "",
      },
    };

    this.getPortfolioItem = this.getPortfolioItem.bind(this);
  }

  getPortfolioItem() {
    axios
      .get(
        `https://markestrada.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response: ", response.data);
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
        // console.log("response stuff ", this.state.portfolioItem);
      })
      .catch((error) => {
        console.log("getPortfolioItem error: ", error);
      });
    console.log("fetch ", this.state.portfolioItem);
  }

  componentDidMount() {
    this.getPortfolioItem();
    console.log("state", this.state.portfolioItem);
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      id,
      logo_url,
      name,
      position,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };

    const logoStyles = {
      width: "200px",
    };

    return (
      <div className="portfolio-detail-container">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>
        <div className="portfolio-detail-description-container">
          <div className="description">{description}</div>
        </div>
        <div className="bottom-content-container">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
