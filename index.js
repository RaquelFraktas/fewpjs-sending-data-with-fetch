// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
      };

    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
      //console.log(object)
      let objId= object["id"]
      document.body.append(objId)

  })
  .catch(function(error) {
    alert("Something went wrong!");
    document.body.append(error.message);
  });

}