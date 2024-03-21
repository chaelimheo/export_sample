let newData = {{params.data}};
newData.project = {{ui.restTable.selectedRow.data.uri}};
newData.type = "/tracker/type/"+newData.type;
return newData;