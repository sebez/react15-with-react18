// hackReact.js
import React from 'react';
import PropTypesLegacy from 'prop-types';
import createReactClass from 'create-react-class';

// Appliquer les hacks au runtime
React.PropTypes = PropTypesLegacy;
React.createClass = createReactClass;

// Affichage d'un avertissement pour le débogage
console.warn('React a été modifié avec PropTypes et createClass legacy.');
