import React from 'react';

const Loader = () => (
  <React.Fragment>
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </React.Fragment>
);

export default Loader;
