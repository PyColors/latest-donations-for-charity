import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDataIfNeeded } from "../../actions/homePageAction";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

// ui
import Img from "../../components/ui/img/Img";
import Loader from "../../components/ui/loader/Loader";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDataIfNeeded());
  }

  render() {
    const { dataHomePage, isLoading, error } = this.props;

    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <Container className="mui--text-subhead">
            <Col md="12">
              {error ? (
               <p className="mui--text-danger">Sorry, we had a problem changing your data. Please try again later.</p>
              ) : null}
            </Col>

            <Row>
              <Col md="12">
                <Img
                  src="images/macmillan-bg.jpg"
                  alt={dataHomePage.name}
                />
                <h1>{dataHomePage.name}</h1>
                <div className="mui--text-subhead">
                  {dataHomePage.thankyouMessage}
                </div>
                <h2>
                  Please find bellow the latest donations for{" "}
                  {dataHomePage.name}
                </h2>
              </Col>

              <Col md="12">
                <Row>
                  <Col md="8">
                    <h3>Description</h3>
                    {dataHomePage.donationDisplayAmounts.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li><em>{item.description}</em></li>
                        </ul>
                      );
                    })}
                  </Col>

                  <Col md="2">
                    <h3>Amount</h3>
                    {dataHomePage.donationDisplayAmounts.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li>{item.name}</li>
                        </ul>
                      );
                    })}
                  </Col>
                  <Col md="2">
                  
                    <h3>Type</h3>
                    {dataHomePage.donationDisplayAmounts.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li>{item.donationPromptType}</li>
                        </ul>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
             <a href="https://www.macmillan.org.uk" target="_blank" className="mui-btn mui-btn--danger">More details</a>
          </Container>
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  dataHomePage: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { dataHomePage, isLoading, error } = state.homePageReducer;

  return {
    dataHomePage,
    error,
    isLoading
  };
}

export default connect(mapStateToProps)(HomePage);
