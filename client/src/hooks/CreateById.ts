const group = (
  arr: {
    [key: string]: string;
  }[],
  key: string
) => {
  return [
    ...arr
      .reduce(
        (acc: { [key: string]: string | number | any }, o) =>
          acc.set(o[key], (acc.get(o[key]) || []).concat(o)),
        new Map()
      )
      .values(),
  ];
};
export default group;
