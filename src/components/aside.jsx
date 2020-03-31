import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpg')" }}></div>
      <img className="logo" src="/assets/images/logo.jpg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Welcome to the garage. We offer reasonable prices, always on time, we are the best (and fictional...).</p>
      {props.children}
    </div>
  );
};

export default Aside;
