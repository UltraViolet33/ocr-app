import ProgressBar from "./ProgressBar";

const Ocr = ({ text, percent }) => {
  return (
    <div>
      <h3>Texte extrait de l'image</h3>
      {text === "" ? (
        <p>Aucun texte</p>
      ) : (
        <div>
          <p style={{ textAlign: "justify" }}>{text}</p>
          <ProgressBar width={300} percent={percent} />
        </div>
      )}
    </div>
  );
};

export default Ocr;
