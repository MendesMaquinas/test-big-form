export default interface InputFormProps {
  label: string,
  name: string,
  hidden?: boolean,
  disabled?: boolean,
  type: "text" | "email" | "password" | "time" | "date" | "number",
  styleLabel?: string,
  styleInput?: string,
  styleBox?: string,

  register: any,
  errors: any,
  defaultValue?: any
}
