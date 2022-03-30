import  { useCallback, useRef } from 'react'
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
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
          e.preventDefault(); capture();
        }}
      >
        Capture
      </button>
    </div>
  );
};


export default WebcamCapture;
