"use client";
import React, { useEffect, useState } from "react";
import AboutModal from "./AboutModal";
import QuestionModal from "./QuestionModal";

export function RenderAboutModal() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1 * 30 * 1000); // 30 seconds in milliseconds

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setShowComponent(false);
  };

  return <div>{showComponent && <AboutModal onclick={handleClose} />}</div>;
}

export function RenderQuestionModal() {
  const [showComponent, setShowComponent] = useState(false);

  const handleShow = () => {
    setShowComponent(false);
  };

  return <div>{showComponent && <AboutModal onclick={handleClose} />}</div>;
}
