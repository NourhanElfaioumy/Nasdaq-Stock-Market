import React from "react";
import { Modal } from "react-bootstrap";
import PropagateLoader from "react-spinners";

// styles
import ModalStyle from "../styles/ModalStyle";

const ModalDetails = ({
  showModal,
  setShowModal,
  tickerDetails,
  marketDetails,
}) => {
  console.log(marketDetails);
  console.log(tickerDetails);
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      id="modal-container"
    >
      <h5 className="text-center mt-3">{tickerDetails.name}</h5>
      <hr />
      <div className="d-flex justify-content-around">
        <img
          className="img-fluid col-3"
          alt="Logo"
          src={
            tickerDetails.branding
              ? tickerDetails.branding.logo_url +
                "?apiKey=OOWQ66Cs3CQUK2c4nRkCR7AGojELcpVg"
              : "./loading.gif"
          }
        />
        <h5 className="mt-4">Ticker : {tickerDetails.ticker}</h5>
      </div>
      <hr />
      <div className="px-5">
        <h5>Description : </h5>
        <p>
          {tickerDetails.description
            ? tickerDetails.description
            : tickerDetails.sic_description}
        </p>
      </div>
      <ModalStyle>
        <button className="btn btn-success ">
          <a
            href={tickerDetails.homepage_url}
            className="text-decoration-none site-btn"
          >
            Company Website
          </a>
        </button>
      </ModalStyle>{" "}
      <hr />
      <div className="stock-details d-flex justify-content-around ">
        <div className="stock-open d-flex justify-content-around">
          <h5 className="pr-3">Open</h5>
          ||
          <p className="pl-3">
            {marketDetails.open ? marketDetails.open : "Not Found"}
          </p>
        </div>
        <div className="stock-close d-flex justify-content-around">
          <h5 className="pr-3">Close</h5>
          ||
          <p className="pl-3">
            {marketDetails.close ? marketDetails.close : "Not Found"}
          </p>
        </div>
      </div>
      <div className="stock-details d-flex justify-content-around">
        <div className="stock-low d-flex justify-content-around">
          <h5 className="pr-3">low </h5>
          ||
          <p className="pl-3">
            {marketDetails.low ? marketDetails.low : "Not Found"}
          </p>
        </div>
        <div className="stock-high d-flex justify-content-around">
          <h5 className="pr-3">High</h5>
          ||
          <p className="pl-3">
            {marketDetails.high ? marketDetails.high : "Not Found"}
          </p>
        </div>
      </div>
      <div className="stock-details d-flex justify-content-center">
        <div className="stock-volume d-flex justify-content-around">
          <h5 className="pr-3">Volume</h5>
          ||
          <p className="pl-3">
            {marketDetails.volume ? marketDetails.volume : "Not Found"}
          </p>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mb-2" id="close-btn-parent">
        <button
          className="btn btn-primary"
          id="close-btn"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
export default ModalDetails;
