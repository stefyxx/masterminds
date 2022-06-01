//* Array map()
const samMap = new Map();
samMap.set("nom", "Legrain");
samMap.set("prenom", "Samuel");
//console.log(samMap);

//Get the full name for each person:
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

//console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}

var arrMap = new Map([
    [1, 'ONE'],
    [2, 'TWO']
]);

/*var arr1Map = new Map(
    arr.map(object => {
        return [object.key, object.val];
    }),
);*/


/*let obj = [
    CAT17: {
        hour_cnt: 9,
        day_cnt: 509,
        year_cnt: 179384,
        cnt_time: '2022/05/23 09:08:00'
    },
    CB02411: {
        hour_cnt: 19,
        day_cnt: 672,
        year_cnt: 208967,
        cnt_time: '2022/05/23 09:08:00'
    },
    CB1142: {
        hour_cnt: 69,
        day_cnt: 980,
        year_cnt: 340916,
        cnt_time: '2022/05/23 09:08:00'
    }];
//console.log(obj);
obj.map((el) => {
    console.log(el);
})*/

let data = new Date("2022/06/01 12:21:00");
console.log("data", data);
console.log("tostring: ", data.toString());

/* live
{
"requestDate": "2022/06/01 12:22:44",       -> endDate
"feature": "CB2105",                        -> namePole
"data": {
    "hour_cnt": 41,                         -> count
    "day_cnt": 849,
    "year_cnt": 246034,
    "cnt_time": "2022/06/01 12:21:00"       -> startDate
    }
}

*/
let dataAPIs = "2022/05/29";
let result = "20220529";
console.log("risultato data",dataAPIs.split("/").join(""));
let d = new Date(2010, 7, 5);
let miadata = new Date(2014, 4, 17);
console.log("17/05/2014: ",miadata);
/*
"requestDate": "2022/06/01 12:48:20",
"feature": "CB2105",
"startDate": "2022/05/29",
"endDate": "2022/05/31",
"timeGaps": [],
"data": [
    {
    "count_date": "2022/05/29",
        "time_gap": 1,
"count": 15,
"average_speed": 20
}
*/