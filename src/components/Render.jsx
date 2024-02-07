"use client";
import React, { useEffect, useState } from "react";
import AboutModal from "./AboutModal";

const RenderAboutModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="w-[100%] absolute left-0 z-10">
      {show && <AboutModal onclick={handleClose} />}
    </div>
  );
};

export default RenderAboutModal;
