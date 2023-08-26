'use client';
import React from 'react';

const CustomButton = () => {
  return (
    <div>
      <button
        disabled={false}
        type={'button'}
        className={`custom-btn`}
        onClick={() => {}}
      >
        <span className={`flex-1`}></span>
      </button>
    </div>
  );
};

export default CustomButton;
