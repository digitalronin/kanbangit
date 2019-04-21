import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired
};


const BaseContainer = (props) => (
  <main>
    {props.children}
  </main>
);

BaseContainer.propTypes = propTypes;

export default BaseContainer;
