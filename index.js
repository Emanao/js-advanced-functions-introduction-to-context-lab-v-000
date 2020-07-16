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

  employee.timeInEvents.push({
    type:"TimeIn",
    date: date,
    hour: parseInt(time)
  });
  return employee;
}

function createTimeOutEvent(employee, dateStamp){
  const [date, time] = dateStamp.split(" ");

  employee.timeOutEvents.push({
    type:"TimeOut",
    date: date,
    hour: parseInt(time)
  });
  return employee;

}

function hoursWorkedOnDate(employee, date){
  const timeIn = employee.timeInEvents.find(elem=>elem.date ===date).hour;
  const timeOut = employee.timeOutEvents.find(elem=>elem.date ===date).hour;
  return (timeOut-timeIn)/100;
}
function getDateObjFromDateStamp(dateStamp){
  const [date, time] = dateStamp.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, min] = time.split("-");
  return new Date(Date.UTC(year,month,day,hour,min));

}
