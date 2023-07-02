import "../styles/TutoStyle.css"
import React, { useState } from 'react';
import Programming from './Programming.js';
import Projects from './Projects';


const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="arrow" onClick={handleToggle}>
        {isOpen ? `▼${title}` : `▶ ${title}`}
      </div>

      {isOpen && children}
    </div>
  );
};

const Tutorials = () => {
  return (
    <div className="container">
      <CollapsibleSection title="Guide Courses">
        <Programming />
      </CollapsibleSection>

      <CollapsibleSection title="Guide Projects">
        <Projects />
      </CollapsibleSection>
    </div>
  );
};

export default Tutorials;