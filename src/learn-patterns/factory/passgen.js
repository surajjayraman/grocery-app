function generatePassword(length, options = {}) {
  const {
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSpecialCharacters = true,
  } = options;

  let characters = "";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) characters += "0123456789";
  if (includeSpecialCharacters) characters += "!@#$%^&*()";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateAndDisplayPassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialCharacters = document.getElementById(
    "includeSpecialCharacters"
  ).checked;

  const password = generatePassword(length, {
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialCharacters,
  });

  document.getElementById("password").textContent = password;
}
