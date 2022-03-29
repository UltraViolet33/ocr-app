import "../css/Input.css";

const Input = ({ setImagePath }) => {
  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="formContainer">
      <form>
        <label>Choisissez une image : </label>
        <input
          type="file"
          onChange={handleChange}
          accept="image/png, image/jpeg"
        />
      </form>
    </div>
  );
};

export default Input;
