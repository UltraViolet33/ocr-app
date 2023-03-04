import ProgressBar from "./ProgressBar";

const Ocr = ({ text, percent, status, confidence }) => {
  let style = "";
  text === "Chargement..." ? (style = "center") : (style = "justify");

  return (
    <div>
      <h3>Texte extrait de l'image</h3>
      {text === "" ? (
        <p>Aucun texte</p>
      ) : (
        <div>
          {percent < 1 ? (
            <div>
              <p>{status}</p>
              <ProgressBar width={300} percent={percent} />{" "}
            </div>
          ) : (
            <div>
              <p>Seuil de validité : {confidence}</p>
              <p style={{ textAlign: style }}>{text}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ocr;
