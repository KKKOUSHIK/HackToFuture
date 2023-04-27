
function displayImage() {

  try {
    const preview = document.querySelector("#preview");
    const file = document.querySelector("#invoice").files[0];
    const result = document.querySelector(".result");
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        preview.style.display="flex"
        preview.src = reader.result;
      },
      false
    );
    if (file.type.startsWith("image/")) {
      result.innerText = "Loading.....";
      result.style.color = "red";
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "acahsimages");
      data.append("cloud_name", "acahscollege");

      console.log(data);
      fetch(
        "https://api.cloudinary.com/v1_1/acahscollege/image/upload/",
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then(async(data) => {
        console.log(data);
          console.log(data.secure_url.toString());
          var url = data.secure_url.toString()
          const id = url.replace("https://res.cloudinary.com/acahscollege/image/upload/","")
            var result = await requestor(
            "get",null,
            "http://localhost:5000/validateInvoice/"+id
          );
          
          
          if(result){
          data = JSON.parse(result);
          console.log(data);
          if(data.status=="Approved"){
          const resElement = document.getElementById("result");
          resElement.innerHTML = "<p> Document matching "+data.Output+"% </p>"
          resElement.style.color="green"
          }
          else{
            const resElement = document.getElementById("result");
            resElement.innerHTML = "<p>Documents is not matching </p>"
            resElement.style.color="red"
            }

          }
          else{
            throw new  Error("uploadImage result is Null")
          }
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      result.innerText = "The selected file is not an image.";
    }

    if (file) {
      reader.readAsDataURL(file);
    }
    
  } catch (err) {
    console.log(err);
  }
}
