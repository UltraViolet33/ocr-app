const Buttons = ({ displayText, saveFile, url, btnDisabled }) => {
  return (
    <div>
      <button onClick={displayText}>Afficher le texte</button>
      <button onClick={() => saveFile(url)} disabled={btnDisabled}>
        Télécharger le PDF
      </button>
    </div>
  );
};

export default Buttons;
