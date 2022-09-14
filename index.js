let dataUser = {
  deviceId: "123",
  data: [],
};

let dataBody = `
    var parsedData = [];
    var obj = {};
    var payload = data;

    var temperature = parseInt(payload.slice(2, 4), 16);
    console.log(temperature)
    if (temperature < 127) {
    var tmp = temperature / 2;
    }
    if (temperature > 127) {
    var tmp = (256 - temperature) / 2;
    }
    tmp = tmp.toFixed(2);

    obj = {};
    obj.key = "tmp";
    obj.value = tmp;
    obj.type = "number";
    obj.unit = "V";
    parsedData.push(obj);
    return parsedData
`;
let dataBodyArray = `
    var parsedData = [];
    var obj = {};
    var payload = data;

    obj = {};
    obj.key = "data1";
    obj.value = payload[0]
    obj.type = "number"
    obj.unit = "V"
    parsedData.push(obj)
    obj = {};
    obj.key = "data2";
    obj.value = payload[1]
    obj.type = "number"
    obj.unit = "V"
    parsedData.push(obj)
    obj = {};
    obj.key = "data3";
    obj.value = payload[2]
    obj.type = "number"
    obj.unit = "V"
    parsedData.push(obj)


    return parsedData;
`;

let dataBodyObject = `
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
`;

// const data = { function: { arguments: "data", body: dataBody } };
// var f = new Function(data.function.arguments, data.function.body);
// console.log(f('9e09ae8d'));
// dataUser.data.push(f('9e09ae8d'))

// const data2 = { function: { arguments: "data", body: dataBodyArray } };
// var f2 = new Function(data2.function.arguments, data2.function.body);
// console.log(f2(['10','30','40']));
// dataUser.data.push(f2(['10','30','40']))

const data3 = { function: { arguments: "data", body: dataBodyObject } };
var f3 = new Function(data3.function.arguments, data3.function.body);

let dataTest = [
  {
    data: {
      temp: 21,
      hum: 71,
    },
  },
  {
    data: {
      temp: 22,
      hum: 73,
    },
  },
  {
    data: {
      temp: 23,
      hum: 73,
    },
  },
  {
    data: {
      temp: 24,
      hum: 74,
    },
  },
  {
    data: {
      temp: 25,
      hum: 75,
    },
  },
];

dataTest.map((item) => {
  let resData = f3(item);

  resData.map((item) => {
    return dataUser.data.push(item);
  });
});

console.log(dataUser);

// dataUser.data.push(f3({
//     'data': {
//         'temp': 20,
//         'hum': 70
//     }
// }));
// dataUser.data.push(f3({
//     'data': {
//         'temp': 20,
//         'hum': 70
//     }
// }));

// console.log(dataUser)
// console.log(dataUser.data[0])
