export const getRepos = async (username) => {
  const formattedUsername = username.toLowerCase().trim()
  const url = `https://api.github.com/users/${formattedUsername}/repos`
  return makeGetCall(url)
}

export const getBio = async (username) => {
  const formattedUsername = username.toLowerCase().trim()
  const url = `https://api.github.com/users/${formattedUsername}`
  return makeGetCall(url)
}

const makeGetCall = async url => {
  const res = await fetch(url)
  const data = await res.json()
  if (data.message === 'not found') {
    return Promise.reject('User Not Found')
  }
  return data
}
