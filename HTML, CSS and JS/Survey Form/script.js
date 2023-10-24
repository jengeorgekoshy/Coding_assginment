function resetForm() {
  document.getElementById('survey-form').reset()
}

function submitForm() {
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const dobInput = document.getElementById('dob')
  const dob = new Date(dobInput.value)
  const country = document.getElementById('country').value
  const gender = document.querySelectorAll("input[name='gender']:checked")
  const profession = document.getElementById('profession').value
  const email = document.getElementById('email').value
  const mobile = document.getElementById('mobile').value

  const patternAlpha = /^[A-Z a-z]+$/
  const patternNum = /^\d{10}$/
  const patternEmail = /^\S+@\S+$/

  let errorMessage = ''

  if (
    !(
      !isNaN(dob) &&
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      profession.trim() !== '' &&
      country &&
      gender.length > 0 &&
      email &&
      mobile.trim() !== ''
    )
  ) {
    alert('Please fill all the fields')
    return
  } else {
    if (!firstName.match(patternAlpha)) {
      errorMessage += 'Invalid First Name\n'
    }
    if (!lastName.match(patternAlpha)) {
      errorMessage += 'Invalid Last Name\n'
    }
    if (!profession.match(patternAlpha)) {
      errorMessage += 'Invalid Profession\n'
    }
    if (dob.getFullYear() > 2002) {
      errorMessage += 'Please select a DOB which is less than 2002\n'
    }
    if (dob.getFullYear() < 1950) {
      errorMessage += 'Please select a DOB which is greater than 1949\n'
    }
    if (gender.length > 1) {
      errorMessage += 'Please select only one gender field\n'
    }
    if (!email.match(patternEmail)) {
      errorMessage += 'Invalid email id\n'
    }
    if (!mobile.match(patternNum)) {
      errorMessage += 'Invalid number, must contain 10 digits'
    }

    if (errorMessage) {
      alert(errorMessage)
    } else {
      let result = `
        First Name: <b>${firstName}</b><br>
        Last Name: <b>${lastName}</b><br>
        Date of Birth:<b> ${dobInput.value}</b><br>
        Country: <b>${country}</b><br>
        Gender: <b>${gender[0].value}</b><br>
        Profession: <b>${profession}</b><br>
        Email: <b>${email}</b><br>
        Mobile Number: <b>${mobile}</b><br>
        `

      document.getElementById('popupData').innerHTML = result
      document.getElementById('popup').style.display = 'block'
    }
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'
  resetForm()
}
