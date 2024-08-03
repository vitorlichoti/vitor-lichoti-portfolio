import RadioButton from "./RadioButton";

interface RadioButtonProps {
  label: string[];
}

export default function RadioButtonsFilter({ label }: RadioButtonProps) {
  return (
    <div style={{width: 'auto', display: 'flex', justifyContent: 'center', gap: '20px'}}>
      {label.map((item, index) => (
        <RadioButton key={index} label={item} />
      ))}
    </div>
  );
}