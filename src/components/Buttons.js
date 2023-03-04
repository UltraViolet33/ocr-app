const Buttons = ({ displayText, saveFile, url, btnDisabled }) => {
  const confirm = (message, method, args = null) => {
    if (window.confirm(message)) {
      method(args);
    }
  };

  const handleText = () => {
    confirm("Voulez-vous afficher le texte ?", displayText);
  };

  const handlePDF = () => {
    confirm("Voulez-vous télécharger le pdf ?", saveFile, url);
  };

  return (
    <div>
      <button onClick={handleText}>Afficher le texte</button>
      <button onClick={handlePDF} disabled={btnDisabled}>
        Télécharger le PDF
      </button>
    </div>
  );
};

export default Buttons;
