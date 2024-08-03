import { frameworks } from "@/common/constants";

export default function SelectByFrameWork() {
  return (
    <select>
      {frameworks.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))}
    </select>
  );
}