import React, { useEffect } from 'react';
import HeaderDivider from '../HeaderDivider/HeaderDivider';

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white homePage py-5 min-vh-100">
      <h2 className="heading text-uppercase p-4">ABOUT COMPONENT</h2>
      <HeaderDivider />

      <div className="aboutPageInfo">
        <div className="container ">
          <div className="row ">
            <div className="col">
              <p className="mt-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col">
              <p className="mt-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
