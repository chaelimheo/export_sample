let statusList = {{actions.newItemType.data.type.properties.status.enum}};
let transList = {{data}}.map((i) => {
  return i.transition.toStatus.id
})
if ({{ui.restTable3.selectedRow.data.status.id}}){
  let crntStat = {{ui.restTable3.selectedRow.data.status.id}};
  transList.push(crntStat)
  let rtn = statusList.filter((i) => transList.includes(i.id))
  rtn= rtn.map((i) => {return ({...i, title : i.name, value : i.name})})
  return rtn;
}