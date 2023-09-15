import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <h3>LOCATION</h3>
              <p className="mb-3">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col">
              <h3>AROUND THE WEB</h3>
              <div className="icons">
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span>
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <span>
                  <i className="fa-solid fa-globe"></i>
                </span>
              </div>
            </div>
            <div className="col">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRights py-4 text-center">
        <p className="text-white">Copyright © Your Website 2023</p>
      </div>
    </>
  );
}
