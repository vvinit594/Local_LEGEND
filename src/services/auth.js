function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function makeFakeToken(email) {
  return `mock.${btoa(`${email}:${Date.now()}`)}.token`
}

export async function login({ email, password }) {
  await delay(700)

  if (!email || !password) {
    const error = new Error('Email and password are required')
    error.code = 'VALIDATION'
    throw error
  }

  // UI-only: accept any credentials
  const user = {
    id: 'user_1',
    name: email.split('@')[0] || 'User',
    email,
  }

  return { token: makeFakeToken(email), user }
}

export async function signup({ name, email, password }) {
  await delay(850)

  if (!name || !email || !password) {
    const error = new Error('Name, email, and password are required')
    error.code = 'VALIDATION'
    throw error
  }

  const user = {
    id: 'user_1',
    name,
    email,
  }

  return { token: makeFakeToken(email), user }
}
