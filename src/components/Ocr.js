const Ocr = ({ text }) => {
  return (
    <div>
      <h3>Texte extrait de l'image</h3>
      {text === "" ? (
        <p>Aucun texte</p>
      ) : (
        <p style={{ textAlign: "justify" }}>{text}</p>
      )}
    </div>
  );
};

export default Ocr;
