import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="mui-container mui--text-center">
          Made with ♥ by <a className="footer__link" href="https://www.pycolors.com">Py Colors</a>
          <br /> <br />
        </div>
      </footer>
    );
  }
}

export default Footer;
