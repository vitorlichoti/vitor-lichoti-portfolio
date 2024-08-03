interface RadioButtonProps {
  label: string;
}

export default function RadioButton({ label }: RadioButtonProps) {
  return (
    <label >
      <input type="radio" name="language" value={label} style={{marginRight: '5px'}} />
      {label}
    </label>
  );
}