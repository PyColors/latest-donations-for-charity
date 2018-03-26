import React, { Component } from "react";
import PropTypes from "prop-types";

class Img extends Component {
  render() {
    const { src, alt, height, width } = this.props;

    return (
      <figure className="figure">
        <img
          className="figure-img"
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      </figure>
    );
  }
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Img.defaultProps = {
  height: "",
  width: ""
};

export default Img;
