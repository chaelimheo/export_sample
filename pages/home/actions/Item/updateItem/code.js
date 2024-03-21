let edit = {{ui.restTable3.editedRow.data}};
let prev = {{ui.restTable3.editedRow.prevData}};
let keys = Object.keys(edit);
let diff = keys.filter((i) => edit[i]!==prev[i]);
let body ={"uri" : edit.uri};
diff.forEach((i) => body[i] = edit[i])
return body;