const classNames = (classes: { [x: string]: boolean }) => {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
};

export default classNames;
