// Validation requirements

function hasUpperCase(input) {
  for (i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true
    }
  }  
} 

function hasLowerCase(input) {
  for (i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true
    }
  }
}

function isLongEnough(input) {
  for (i = 0; i < input.length; i++) {

    if (input.length >= 8) {
      return true
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '_', '-' ]
  for (i = 0; i < input.length; i++) {
    for (j = 0; j < specialCharacters.length; j++) {
      if (input[i] === specialCharacters[j]) {
        return true
      }
    }
  }
}

// Password validation

function isPasswordValid(input) {
  if (hasUpperCase(input)) {
    console.log('Password in valid.')
  }
  if (!hasUpperCase(input)) {
    console.log('Password must have at least one uppercase letter.')
  }
  if (hasLowerCase(input)) {
    console.log('Password is valid.')
  }
  if (!hasLowerCase(input)) {
    console.log('Password must have at least one lowercase letter.')
  }
  if (isLongEnough(input)) {
    console.log('Password is valid.')
  }
  if (!isLongEnough(input)) {
    console.log('Password must be at least 8 characters in length.')
  }
  if (hasSpecialCharacter(input)) {
    console.log('Password is valid.')
  }
  if (!hasSpecialCharacter(input)) {
    console.log('Password must include at least one special character: ! @ # $ % & * _ -')
  }
}

// Runs password validator

isPasswordValid('!Psss4ssword')
