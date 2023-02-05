/**
 *
 * @returns users in db
 */

export const fetchUsers = async () => {
  let users = await fetch(
    "https://backend-test-connect-bdd.vercel.app/userInfos"
  ).then((res) => res.json())
  return users
}

/**
 *
 * @returns commands in db
 */

export const fetchCommands = async () => {
  let commands = await fetch(
    "https://backend-test-connect-bdd.vercel.app/userCommands"
  ).then((res) => res.json())
  return commands
}
