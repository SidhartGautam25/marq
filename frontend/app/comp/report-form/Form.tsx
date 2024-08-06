import React, { useState } from 'react';

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        
    </div>
  );
};

export default Form;
