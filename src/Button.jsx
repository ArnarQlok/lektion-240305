import "./Button.css";

function Button() {
  function showAlert() {
    alert("Hello World!");
  }
  return (
    <button className="btn" onClick={showAlert}>
      Klicka på mig
    </button>
  );
}

export function sum() {
  console.log(1 + 2);
}

export default Button;
