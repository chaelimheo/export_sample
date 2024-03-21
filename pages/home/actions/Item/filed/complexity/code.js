let complexity = {{actions.newItemType.data.type.properties.complexity}};
let options = [...complexity.enum];
let addTitle = options.map((i) => {return ({...i, title : i.name, value:i.name})});
complexity.enum = [...addTitle];
return complexity;