const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  };

const validateUsername = (username) => {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
  return usernameRegex.test(username)
}

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password)
}

export const handleEmailChange = (setEmail, setIsEmailInvalid) => (event) => {
  const newEmail = event.target.value.trim(); // Elimina espacios en blanco al inicio y fin
    setEmail(newEmail);
    setIsEmailInvalid(newEmail === "" || !validateEmail(newEmail));
}

export const handleUsernameChange = (setUsername, setisUsernameInvalid) => (event) => {
  const newUsername = event.target.value.trim();
  setUsername(newUsername);
  setisUsernameInvalid(newUsername === "" || !validateUsername(newUsername));
}

export const handlePasswordChange = (setPassword, setIsPasswordInvalid) => (event) => {
  const newPassword = event.target.value;
  setPassword(newPassword);
  setIsPasswordInvalid(!validatePassword(newPassword));
};