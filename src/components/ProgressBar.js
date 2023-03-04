import "../css/ProgressBar.css";

const ProgressBar = ({ width, percent }) => {
  const value = percent * width;

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${value}px` }} className="progress"></div>
    </div>
  );
};

export default ProgressBar;
