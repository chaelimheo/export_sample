return data.map((i) => {
  i.id = Number(i.uri.split('/').reverse()[0]);
  return i
});