import React, { useState, useEffect } from 'react';
import HeaderDivider from '../HeaderDivider/HeaderDivider';
import port1 from '../images/port1.png';
import port2 from '../images/port2.png';
import port3 from '../images/port3.png';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  let [overlayVisible, setOverlayVisible] = useState(false);
  let [imgSrc, setImgSrc] = useState('');

  function toggleOverlay(el) {
    setImgSrc(el);
    setOverlayVisible(!overlayVisible);
  }

  const arrPort = [port1, port2, port3, port1, port2, port3];

  return (
    <div
      id="portfolio"
      className="d-flex flex-column justify-content-center align-items-center text-navy py-5 min-vh-100 bg-white"
    >
      <h2 className="heading text-uppercase pt-5 mt-5">PORTFOLIO COMPONENT</h2>

      <HeaderDivider />

      <div className="portfolioGallery w-100">
        <div className="container mt-3">
          <div className="row align-items-start g-5">
            {arrPort.map((el, i) => {
              return (
                <div
                  onClick={() => toggleOverlay(el)}
                  key={i}
                  className="col-md-4 porfolioCard"
                >
                  <div className="rounded-3 overflow-hidden position-relative">
                    <img className="w-100 rounded-3" src={el} />
                    <div className="portfolioOverlay position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {overlayVisible && (
        <div
          className="position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center image-Overlay"
          onClick={toggleOverlay}
        >
          <img alt="imgOverlay" src={imgSrc} />
        </div>
      )}
    </div>
  );
}
