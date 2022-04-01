import ProgressBar from "./ProgressBar";

const Ocr = ({ text, percent }) => {
  let style = "";
  text === "Chargement..." ? (style = "center") : (style = "justify");

  return (
    <div>
      <h3>Texte extrait de l'image</h3>
      {text === "" ? (
        <p>Aucun texte</p>
      ) : (
        <div>
          <p style={{ textAlign: style }}>{text}</p>
          {percent < 1 ? <ProgressBar width={300} percent={percent} /> : ""}
        </div>
      )}
    </div>
  );
};

export default Ocr;
