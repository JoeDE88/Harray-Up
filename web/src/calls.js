


export const login = (email,password)=>{
fetch("https://vigilant-zebra-v6qvqrjr9jggcx67x-5000.app.github.dev/login",{
method:"POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
    email: email,
    password: password,
  }),
})
.then((resp) => {return resp.json()})
      .then((resp) => resp.json()) 
      .then((data) => { console.log(data.message)
        
      })
      .catch((error) => console.error("Error:", error));
  }

 

export const register = (email,password)=>{
    fetch("https://vigilant-zebra-v6qvqrjr9jggcx67x-5000.app.github.dev/register",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((resp) => {return resp.json()})
          .then((resp) => resp.json()) 
          .then((data) => {
            console.log(data.message) 
          })
          .catch((error) => console.error("Error:", error));
      }
    