// SkillsMessages.js

import React, { useState, useEffect } from 'react';
import { skillsMessagesData } from '../../data/skillsMessagesData';
import '../skills.css';

const SkillsMessages = ({ numSkills }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (numSkills && numSkills <= skillsMessagesData.length) {
      setMessage(skillsMessagesData[numSkills - 1]);
    }

    const timeoutId = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [numSkills]);

  return (
    <div className={`skills-message ${message ? 'active' : ''}`}>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SkillsMessages;
