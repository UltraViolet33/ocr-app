import ProgressBar from "./ProgressBar";

const Ocr = ({ text, percent, status }) => {
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
          {percent < 1 ? (
            <div>
              <p>{status}</p>
              <ProgressBar width={300} percent={percent} />{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Ocr;
