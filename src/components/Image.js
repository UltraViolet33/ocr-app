const Image = ({ imagePath }) => {
  return (
    <div>
      <h3>Votre image</h3>
      {imagePath === null ? (
        <p>Vous n'avez pas encore choisi d'image</p>
      ) : (
        <img src={imagePath} />
      )}
    </div>
  );
};

export default Image;
