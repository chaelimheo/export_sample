let projects = {{actions.getProjects.data}}.filter((i) =>i.category)
let categorys = new Set()
projects.map((i) => categorys.add(i.category.name))
return Array.from(categorys)