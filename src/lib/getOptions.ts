export default function getOptions(data: any) {
  return Object.keys(data).map((name) => {
    return {
      name,
      value: data[name as keyof typeof data],
    };
  });
}
