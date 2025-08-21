import React from "react";

interface ResizableBackgroundProps {
    backgroundLink: string;
}

const ResizableBackground: React.FC<ResizableBackgroundProps> = ({backgroundLink}) => {
  return (
    <div className="background-container">
      <img
        src={backgroundLink}
        alt="Background"
        className="background-image"
      />
    </div>
  );
};

export default ResizableBackground;
