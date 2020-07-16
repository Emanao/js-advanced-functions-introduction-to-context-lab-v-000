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
function createTimeInEvent(employee, dateStamp){
  const [date, time] = dateStamp.split(" ");
  // const dateObj = getDateObjFromDateStamp(dateStamp);
  // console.log(dateObj);

  employee.timeInEvents.push({
    type:"TimeIn",
    date: date,
    hour: parseInt(time)
  });
  return employee;
}
function getDateObjFromDateStamp(dateStamp){
  const [date, time] = dateStamp.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, min] = time.split("-");
  return new Date(Date.UTC(year,month,day,hour,min));

}
