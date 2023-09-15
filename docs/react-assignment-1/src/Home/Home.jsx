import React, { useEffect } from 'react';
import homeImg from '../images/avataaars.svg';
import HeaderDivider from '../HeaderDivider/HeaderDivider';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white homePage py-5 min-vh-100">
      <img className="homeAvatar" src={homeImg} alt="home-image" />
      <h2 className="heading text-uppercase p-4">start Framework</h2>
      <HeaderDivider />
      <p className="mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
