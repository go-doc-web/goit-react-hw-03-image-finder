import css from './button.module.scss';

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={css.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
