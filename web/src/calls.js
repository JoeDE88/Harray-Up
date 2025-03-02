
export const baseURL = "/api"

export const login = (email, password) => {
  fetch(`${baseURL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((resp) => { return resp.json() })
    .then((data) => {
      console.log(data.message)

    })
    .catch((error) => console.error("Error:", error));
}



export const register = (email, password) => {
  fetch(`${baseURL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((resp) => { return resp.json() })
    .then((data) => {
      console.log(data.message)
    })
    .catch((error) => console.error("Error:", error));
}
