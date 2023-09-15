import React from 'react';

export default function HeaderDivider() {
  return (
    <div id="divider" className="d-flex align-items-center">
      <div className="dividerBlock"></div>

      <i className="fa-solid fa-star mx-3 text-white "></i>

      <div className="dividerBlock"></div>
    </div>
  );
}
