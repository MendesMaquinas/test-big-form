
export default function spinnerOptions(options: any, selectedId: number) {

  const selectedItem = (item) => {
    return item.id == selectedId;
  };

  return options?.map((item) => {
    return (
      <option
        value={+item.id}
        key={+item.id+ "-" + item.name}
        selected={selectedItem(item)}
      >
        {item.name}
      </option>
    );
  });
}