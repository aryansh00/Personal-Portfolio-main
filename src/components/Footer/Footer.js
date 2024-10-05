import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            Thanks for<FontAwesomeIcon icon={faHeart} size="sm" /> having a look
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
