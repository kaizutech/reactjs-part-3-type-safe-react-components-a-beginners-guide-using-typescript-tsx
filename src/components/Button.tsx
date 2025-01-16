interface ButtonProps {
  label: string;
  onClick?: () => void; // Optional prop
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

// Default props
Button.defaultProps = {
  onClick: () => alert("Button clicked!"),
};

export default Button;
