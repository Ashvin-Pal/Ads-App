import "../css/TextInput.css";

export const TextInput = ({ name, value, onChange, placeholder }) => {
    return (
        <input
            name={name}
            className="TextInput"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
