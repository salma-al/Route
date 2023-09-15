import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);
  return (
    <div>
      <h2 className="text-center vh-100 d-flex align-items-center justify-content-center">
        Not Found!
      </h2>
    </div>
  );
}
