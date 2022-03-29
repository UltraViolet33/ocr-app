import "../css/Input.css";
const Input = ({ setImage }) => {
  return (
    <div className="formContainer">
      <form>
        <label for="image">Choisissez une image : </label>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          name="image"
        />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Input;
