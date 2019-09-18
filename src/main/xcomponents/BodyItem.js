import React from 'react';
// import PropTypes from 'prop-types';

// change this into a class component if you'd like.
const BodyItem = ({ bodyItemId, bodyItem }) => (
  <div>
    Look at me! I'm a BodyItem. When I have a visualizer I'll be displaying:
    {JSON.stringify(bodyItem)}
  </div>
);

export default BodyItem;
