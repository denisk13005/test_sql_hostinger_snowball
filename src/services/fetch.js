/**
 *
 * @returns users in db
 */

export const fetchUsers = async () => {
  let users = await fetch("http://localhost:8800/userInfos").then((res) =>
    res.json()
  )
  return users
}

/**
 *
 * @returns commands in db
 */

export const fetchCommands = async () => {
  let commands = await fetch("http://localhost:8800/userCommands").then((res) =>
    res.json()
  )
  return commands
}
