// Table Data
let dataUser = [
  {
    deviceId: "123",
    data: {
      temp: 21,
      hum: 71,
    },
    waktu: "12:00",
  },
  {
    deviceId: "123",
    data: {
      temp: 22,
      hum: 72,
    },
    waktu: "12:00",
  },
  {
    deviceId: "123",
    data: {
      temp: 23,
      hum: 73,
    },
    waktu: "12:00",
  },
  {
    deviceId: "123",
    data: {
      temp: 24,
      hum: 74,
    },
    waktu: "12:00",
  },
  {
    deviceId: "123",
    data: {
      temp: 25,
      hum: 75,
    },
    waktu: "12:00",
  },
];

let parserData = [
  {
    deviceId: "123",
    body: `
        var parsedData = [];
        var obj = {};
        var payload = data;
    
        obj = {};
        obj.key = "data1";
        obj.value = payload.temp
        obj.type = "number"
        obj.unit = "V"
        obj.time = waktu
        parsedData.push(obj)
    
        obj = {};
        obj.key = "data2";
        obj.value = payload.hum
        obj.type = "number"
        obj.unit = "V"
        obj.time = waktu
        parsedData.push(obj)
    
        return parsedData
    `,
  },
  {
    deviceId: "123",
    body: `
        var parsedData = [];
        var obj = {};
        var payload = data;
    
        obj = {};
        obj.key = "data1";
        obj.value = payload.data.temp
        obj.type = "number"
        obj.unit = "V"
        parsedData.push(obj)
    
        obj = {};
        obj.key = "data2";
        obj.value = payload.data.hum
        obj.type = "number"
        obj.unit = "V"
        parsedData.push(obj)
    
        return parsedData
    `,
  },
];

let parserTable = [
  {
    deviceId: "123",
    body: `
            var parsedData = [];
            var obj = {};
            var payload = data;
        
            obj = {};
            obj.temp = payload.temp
            obj.hum = payload.hum
            obj.time = waktu
            parsedData.push(obj)
        
            return parsedData
        `,
  },
];

let temporaryData = [];
let tempDataTable = [];

const data = {
  function: { arguments: "data,waktu", body: parserData[0].body },
};
var fun = new Function(data.function.arguments, data.function.body);

const data2 = {
  function: { arguments: "data,waktu", body: parserTable[0].body },
};
var fun2 = new Function(data2.function.arguments, data2.function.body);

dataUser.map((item) => {
  console.log(item.data);
  let data = fun(item.data, item.waktu);
  data.map((item) => {
    return temporaryData.push(item);
  });
});

let dataFilter2 = dataUser.filter((item) => {
  return item.deviceId == "123";
});

dataFilter2.map((item) => {
  let data2 = fun2(item.data, item.waktu);
  data2.map((item) => {
    return tempDataTable.push(item);
  });
});

console.log(temporaryData);
console.log(tempDataTable);
let dataFilter = temporaryData.filter((item) => {
  return item.key == "data1";
});

console.log(dataFilter);

temporaryData.map((item) => {
  console.log(item);
});
