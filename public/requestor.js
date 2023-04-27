
async function requestor(type, raw, url){
    var myHeaders = new Headers();
    
     myHeaders.append("Access-Control-Request-Headers", "*");
     myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
      //  mode: "no-cors",
       method: type,
       headers: myHeaders,
       redirect: 'follow'
     };
    if(raw){
      requestOptions.body = raw
    }
    
    console.log(requestOptions);
  
    return  await fetch(url, requestOptions)
   .then(response => response.text())
     .then(result => {return result} )
     .catch(error =>{ console.log('error', error); return null});
  }
