export default interface SpinnerProps {
  name: string;
  label: string;
  array: any;
  setSelectedValue: (idSelectedItem: any) => void;
  selectedId: number;
  disabled: boolean,
}