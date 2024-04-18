import React, { useState } from "react";

function ButtonComponent() {
  // State to keep track of active button
  const [activeButton, setActiveButton] = useState(null);

  // State to keep track of hovered button
  const [hoveredButton, setHoveredButton] = useState(null);

  // State to keep track of position of the div
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });

  // State to keep track of width of the active button
  const [activeButtonWidth, setActiveButtonWidth] = useState(100); // Default width

  // Function to handle button click and set active button
  const handleButtonClick = (buttonId, buttonWidth) => {
    setActiveButton(buttonId);
    setActiveButtonWidth(buttonWidth);
    setHoveredButton(null); // Reset hovered button when button is clicked
    // Update div position based on button clicked
    switch (buttonId) {
      case 1:
        setDivPosition({ top: 0, left: 0 });
        break;
      case 2:
        setDivPosition({ top: 0, left: 100 });
        break;
      case 3:
        setDivPosition({ top: 0, left: 200 });
        break;
      default:
        setDivPosition({ top: 0, left: 0 });
    }
  };

  // Function to handle mouse enter event on buttons
  const handleButtonHover = (buttonId, buttonWidth) => {
    setHoveredButton(buttonId); // Set hovered button
    // Update div position based on button hovered
    switch (buttonId) {
      case 1:
        setDivPosition({ top: 0, left: 0 });
        break;
      case 2:
        setDivPosition({ top: 0, left: 100 });
        break;
      case 3:
        setDivPosition({ top: 0, left: 200 });
        break;
      default:
        setDivPosition({ top: 0, left: 0 });
    }
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      {/* Div with absolute positioning */}
      <div
        style={{
          position: "absolute",
          top: divPosition.top,
          left: divPosition.left,
          width: `${activeButtonWidth}px`, // Set width based on activeButtonWidth
          height: "50px",
          backgroundColor: "red",
          transition: "top 0.5s, left 0.5s, width 0.5s", // Adding transitions for top, left, and width properties
        }}
      >
        {/* Content of the absolute div */}
      </div>

      {/* Button 1 */}
      <button
        style={{
          position: "absolute",
          top: 0,
          width: 100,
          left: 0,
          color: activeButton === 1 || hoveredButton === 1 ? "blue" : "black", // Change text color based on active button or hovered button
        }}
        onClick={() => handleButtonClick(1, 100)} // Pass width of the button
        onMouseEnter={() => handleButtonHover(1, 100)} // Set div position on hover
        onMouseLeave={() => setHoveredButton(null)} // Reset hovered button on mouse leave
      >
        Button 1
      </button>

      {/* Button 2 */}
      <button
        style={{
          position: "absolute",
          top: 0,
          width: 100,
          left: 100,
          color: activeButton === 2 || hoveredButton === 2 ? "blue" : "black", // Change text color based on active button or hovered button
        }}
        onClick={() => handleButtonClick(2, 100)} // Pass width of the button
        onMouseEnter={() => handleButtonHover(2, 100)} // Set div position on hover
        onMouseLeave={() => setHoveredButton(null)} // Reset hovered button on mouse leave
      >
        Button 2
      </button>

      {/* Button 3 */}
      <button
        style={{
          position: "absolute",
          top: 0,
          left: 200,
          width: 100,
          color: activeButton === 3 || hoveredButton === 3 ? "blue" : "black", // Change text color based on active button or hovered button
        }}
        onClick={() => handleButtonClick(3, 100)} // Pass width of the button
        onMouseEnter={() => handleButtonHover(3, 100)} // Set div position on hover
        onMouseLeave={() => setHoveredButton(null)} // Reset hovered button on mouse leave
      >
        Button 3
      </button>

      {/* Display content below active button */}
      {activeButton && (
        <div
          style={{ position: "absolute", top: 60, left: activeButton * 100 }}
        >
          Content for Button {activeButton}
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;
