import "../css/Image.css"

const Image = ({imagePath}) => {

    console.log(imagePath)

  return (
    <div>
      <h2>Votre image</h2>
      {imagePath === null ? <p>Vous n'avez pas encore choisi d'image</p> : <img src={imagePath} /> }
     
    </div>
  );
};


export default Image;