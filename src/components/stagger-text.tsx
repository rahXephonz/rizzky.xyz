import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const StaggerText = () => {
  const boxRef = useRef(null);

  const handleClick = () => {
    // Animate the box when the button is clicked
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 1,
      ease: "power2.out",
    });

    console.log("woeks");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Click to Animate the Box</h2>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Animate
      </button>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "coral",
        }}
      ></div>
    </div>
  );
};
