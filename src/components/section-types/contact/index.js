import React from 'react';
import './contact.module.scss';

// TODO: this will need to be a runtime thing
const emailAddress = [
  'hel',
  'lo',
  '@',
  'erept',
  'iledest',
  'ruc',
  'tion',
  '.c',
  'om',
];

const Contact = props => (
  <div>
    <p>
      Hit us on{' '}
      <a href="https://www.facebook.com/ereptiledestruction/">Facebook</a>, or
      write us email at {emailAddress.join('')}
    </p>
  </div>
);

export default Contact;
