const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  };

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password)
}

export const handleEmailChange = (setEmail, setIsEmailInvalid) => (event) => {
  const newEmail = event.target.value.trim(); // Elimina espacios en blanco al inicio y fin
    setEmail(newEmail);
    setIsEmailInvalid(newEmail === "" || !validateEmail(newEmail));
}

export const handlePasswordChange = (setPassword, setIsPasswordInvalid) => (event) => {
  const newPassword = event.target.value;
  setPassword(newPassword);
  setIsPasswordInvalid(!validatePassword(newPassword));
};