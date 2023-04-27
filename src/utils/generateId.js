const GenerateId = (name)=>{
    const date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (year<10){
        year = `0${year}`
    }
    if (month<10){
        month = `0${month}`
    }
    if (day<10){
        day = `0${day}`
    }
    if (hour<10){
        hour = `0${hour}`
    }
    if (minute<10){
        minute = `0${minute}`
    }
    if (second<10){
        second = `0${second}`
    }
      
    return `AYUR${day}${month}${year}-${name}-${hour}${minute}-${second}`;
}
module.exports = GenerateId
//  console.log(GenerateId("EMP"));