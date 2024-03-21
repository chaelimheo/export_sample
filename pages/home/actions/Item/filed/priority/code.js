let priority = {{actions.newItemType.data.type.properties.priority}};
let options = [...priority.enum];
let addTitle = options.map((i) => {return ({...i, title : i.name, value:i.name})});
priority.enum = [...addTitle];
return priority;