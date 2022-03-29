const Ocr = ({ text }) => {
  return (
    <div>
      <h3>Texte extrait de l'image</h3>
      {text === null ? <p>Aucun texte</p> : <p>{text}</p>}
    </div>
  );
};

export default Ocr;
