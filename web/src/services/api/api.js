export const baseURL = "https://solid-guacamole-x5vwvpgp7q7jhp66g-8000.app.github.dev"

export const postLogin = (username, password) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem("csrf_access_token") || "",
    },
    credentials: "include",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((resp) => { return resp.json() })
    .then((data) => {
      sessionStorage.setItem("csrf_access_token", data.csrf_token);
      return data
    })
    .catch((error) => console.error("Error:", error));
}

export const postRegister = (email, username, password) => {
  return fetch(`${baseURL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  })
    .then((resp) => { return resp.json() })
    .then((data) => {
      return data
    })
    .catch((error) => console.error("Error:", error));
}

export const postLogout = () => {
  return fetch(`${baseURL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem("csrf_access_token") || "",
    },
    credentials: "include",
  }).then((data) => {
    return data
  })
}


export const getAllLevels = () => {
  return fetch(`${baseURL}/levels`)
    .then((response) => response.json())
}

export const getLevel = (levelId) => {
  return fetch(`${baseURL}/levels/${levelId}`, {
    method: "GET"
  })
    .then((resp) => {
      return resp.json();
    })
}