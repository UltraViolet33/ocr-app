import "../css/Input.css";
const Input = () => {
  return (
    <div className="formContainer">
      <form>
          <label for="image">Choisissez une image : </label>
          <input type="file" name="image" />
          <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Input;
