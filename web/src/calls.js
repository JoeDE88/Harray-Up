
let root="https://vigilant-zebra-v6qvqrjr9jggcx67x-5000.app.github.dev"

export const login = (email,password)=>{
fetch(`${root}/login`,{
method:"POST",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
    email: email,
    password: password,
  }),
})
.then((resp) => {return resp.json()}) 
      .then((data) => { console.log(data.message)
        
      })
      .catch((error) => console.error("Error:", error));
  }

 

export const register = (email,password)=>{
    fetch(`${root}/register`,{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((resp) => {return resp.json()})
          .then((data) => {
            console.log(data.message) 
          })
          .catch((error) => console.error("Error:", error));
      }
    