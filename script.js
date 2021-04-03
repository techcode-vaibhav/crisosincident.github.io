let TOKEN = document.getElementById("token").value;

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Basic " +TOKEN
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

function handleSubmit(e){
    e.preventDefault();
    var formData = Object.fromEntries(new FormData(document.getElementById('form')).entries());
    formData.content = {};
    
    postData("https://tcs01.pegalabs.io/prweb/api/v1/cases", formData).then(console.log).catch(console.error);
}

function handletokenChange({ target: { value } }){
    TOKEN=value;
}