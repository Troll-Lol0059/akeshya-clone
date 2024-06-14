"use client"
import React from 'react';

function Button1({ text, handlerFunc = () => {}, customClass }) {
  return (
    <button 
      className={`${customClass} text-[16px] font-[500] tracking-[1px] rounded-[50px] border-2 border-blueVoilet text-blueVoilet transition-all duration-500 hover:bg-blueVoilet hover:text-white`}
      onClick={handlerFunc}
    >
      {text}
    </button>
  );
}

export default Button1;
