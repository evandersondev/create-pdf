document.querySelector('form').addEventListener('submit', () => {
  const email = document.getElementById('email')
  const emailtype = document.getElementById('emailtype')
  const emailCompleted = `${email.value}@${emailtype.value}`

  email.value = emailCompleted
})
