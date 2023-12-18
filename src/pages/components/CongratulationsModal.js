
import React from 'react';
import { Link } from 'react-router-dom'; 
import "./congratulationsModal.css"; 

const CongratulationsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <p>Congratulations! Your have collected Thaleia's skills successfully!.</p>
          <div>
            <button onClick={onClose}>Collect all skills again!</button><br />
            <Link to="/contact">
              <button>Contact Thaleia</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
