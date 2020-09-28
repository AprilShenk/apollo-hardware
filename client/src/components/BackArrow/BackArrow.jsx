import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackArrow.css';

const BackArrow = () => {
  const history = useHistory()
  return (
    <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={()=> history.goBack()} />
      </div>
  );
};

export default BackArrow;