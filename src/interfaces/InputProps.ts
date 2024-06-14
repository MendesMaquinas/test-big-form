export default interface InputProps {
  label: string;
  value: any;
  setValue: (newValue: any) => void;
  name?: string;
  render?: boolean;
  type: "text" | "email" | "password" | "time" | "date" | "number";
  styleLabel?: string;
  styleInput?: string;
}
