"use client";
import React, { useEffect, useState } from "react";
import AboutModal from "./AboutModal";
import QuestionModal from "./QuestionModal";

export function RenderAboutModal() {
  const [showComponent, setShowComponent] = useState(false);

  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    // If the user has not visited, show the popup and set the flag
    if (!hasVisited) {
      const timeout = setTimeout(() => {
        setShowComponent(true);
        localStorage.setItem("hasVisited", "true");
      }, 1 * 30 * 1000); // 30 seconds in milliseconds

      return () => clearTimeout(timeout);
    }

    return;
  }, []);

  const handleClose = () => {
    setShowComponent(false);
  };

  return <div>{showComponent && <AboutModal onclick={handleClose} />}</div>;
}

// export function RenderQuestionModal({}) {
//   const [showQuestion, setShowQuestion] = useState(false);

//   const handleShow = () => {
//     setShowQuestion(false);
//   };

//   return <div>{showQuestion && <QuestionModal onclick={handleShow} />}</div>;
// }
