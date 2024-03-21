return data.map((i) => {
  i.id = Number(i.uri.split('/').reverse()[0]);
  i.title = i.name;
  i.value = i.name;
  return i
});