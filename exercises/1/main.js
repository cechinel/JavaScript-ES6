// EXERCISE 1 - SOLUTION

let sql = "create table author (id number, name string, age number, city string, state string, country string)",
    sqlMatch = sql.match(/create table ([a-z]+) (\(.*\))/),
    tableName = sqlMatch[1],
    columns = sqlMatch[2];

columns = columns.replace(/(\(|\))/g, "").split(",");

console.log(tableName, columns);
//returns author['id number', ' name string', ' age number', ' city string', ' state string', ' country string']
