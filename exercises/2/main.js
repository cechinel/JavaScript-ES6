// EXERCISE 2 - SOLUTION

let sql = "create table author (id number, name string, age number, city string, state string, country string)",
    sqlMatch = sql.match(/create table ([a-z]+) (\(.*\))/),
    tableName = sqlMatch[1],
    columns = sqlMatch[2];

columns = columns.replace(/(\(|\))/g, "").split(",");

let database = {
    tables: {}
};

Object.defineProperty(database, 'tables', {
    enumerable: true,
    writable: false,
    configurable: false
});

database.tables[tableName] = {
    columns: {},
    data: []
};

for (let column of columns) {
    let item = column.trim().split(' '),
        name = item[0],
        type = item[1];

    database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, null, 2));
// returns
// {
// 	"tables": {
// 		"author": {
// 			"columns": {
// 				"id": "number",
// 				"name": "string",
// 				"age": "number",
// 				"city": "string",
// 				"state": "string",
// 				"country": "string"
// 			},
// 			"data": []
// 		}
// 	}
// }
