function createEmployeeRecord(data){
  return {
    firstName:data[0],
    familyName:data[1],
    title:data[2],
    payPerHour:data[3],
    timeInEvents:[],
    timeOutEvents:[]
  };
}
function createEmployeeRecords(employees){
  return employees.map((employee)=>createEmployeeRecord(employee));
}
