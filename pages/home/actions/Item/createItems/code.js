let newdata = {{ui.restTable3.newRow.data}};
newdata.tracker = {{ui.restTable2.selectedRow.data.uri}};
newdata.status = {{actions.newItemType.data.type.properties.status.enum[0]}}
return newdata