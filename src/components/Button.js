/** @format */

const Button = ({ onAdd, text, color }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: `${color}` }}
        className='btn'
        onClick={onAdd}>
        {text}
      </button>
    </div>
  );
};

export default Button;
