import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = ({ setImagePath }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImagePath(imageSrc);
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        height={432}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={768}
        videoConstraints={videoConstraints}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          capture();
        }}
      >
        Prendre une photo
      </button>
    </div>
  );
};

export default WebcamCapture;
