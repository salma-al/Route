import React, { useState, useEffect } from 'react';
import HeaderDivider from '../HeaderDivider/HeaderDivider';
import { Transition, CSSTransition } from 'react-transition-group';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  let [nameEmpty, SetNameEmpty] = useState(true);
  let [ageEmpty, SetAgeEmpty] = useState(true);
  let [emailEmpty, SetEmailEmpty] = useState(true);
  let [passwordEmpty, SetPasswordEmpty] = useState(true);

  function handleNameChange(e) {
    if (e.target.value !== '') {
      SetNameEmpty(false);
    } else if (e.target.value == '') {
      SetNameEmpty(true);
    }
  }
  function handleAgeChange(e) {
    if (e.target.value !== '') {
      SetAgeEmpty(false);
    } else if (e.target.value == '') {
      SetAgeEmpty(true);
    }
  }
  function handleEmailChange(e) {
    if (e.target.value !== '') {
      SetEmailEmpty(false);
    } else if (e.target.value == '') {
      SetEmailEmpty(true);
    }
  }
  function handlePasswordChange(e) {
    if (e.target.value !== '') {
      SetPasswordEmpty(false);
    } else if (e.target.value == '') {
      SetPasswordEmpty(true);
    }
  }
  console.log(nameEmpty);

  return (
    <div
      id="contactPage"
      className="d-flex flex-column justify-content-center align-items-center text-navy py-5 min-vh-100 bg-white"
    >
      <h2 className="heading text-uppercase pt-5 mt-5">CONATCT SECTION</h2>

      <HeaderDivider />

      <div className="w-100">
        <form className="w-50 p-3 mx-auto mt-5 bg-white">
          <label htmlFor="userName" className="position-relative">
            <span className={nameEmpty ? 'SlideDown' : 'SlideUp'}>
              userName:
            </span>
          </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom my-2 py-3 "
            onChange={handleNameChange}
          />

          <label htmlFor="userAge" className="position-relative top-0 ">
            <span className={ageEmpty ? 'SlideDown' : 'SlideUp'}>userAge:</span>
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userName"
            className="form-control border-0 border-bottom my-2 py-3"
            onChange={handleAgeChange}
          />

          <label htmlFor="userEmail" className="position-relative top-0 ">
            <span className={emailEmpty ? 'SlideDown' : 'SlideUp'}>
              userEmail:
            </span>
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userName"
            className="form-control border-0 border-bottom my-2 py-3 "
            onChange={handleEmailChange}
          />

          <label htmlFor="userPassword" className="position-relative top-0 ">
            <span className={passwordEmpty ? 'SlideDown' : 'SlideUp'}>
              userPassword:
            </span>
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userName"
            className="form-control border-0 border-bottom my-2 py-3"
            onChange={handlePasswordChange}
          />

          <button
            type="button"
            className="btn mt-4 text-white"
            style={{ backgroundColor: '#1abc9c' }}
          >
            send Message
          </button>
        </form>
      </div>
    </div>
  );
}
