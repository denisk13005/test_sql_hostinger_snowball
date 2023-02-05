import { useEffect, useState } from "react"
import { fetchUsers, fetchCommands } from "./services/fetch"
import "./App.css"
// import Form from "./components/form/form"

import SnowLoader from "./components/snowLoader/SnowLoader"

function App() {
  const [tests, setTests] = useState([
    { test1: "1", test2: "test2", test3: "test3" },
    { test1: "2", test2: "test2", test3: "test3" },
    { test1: "3", test2: "test2", test3: "test3" },
    { test1: "4", test2: "test2", test3: "test3" },
    { test1: "5", test2: "test2", test3: "test3" },
    { test1: "6", test2: "test2", test3: "test3" },
    { test1: "7", test2: "test2", test3: "test3" },
    { test1: "8", test2: "test2", test3: "test3" },
    { test1: "9", test2: "test2", test3: "test3" },
    { test1: "10", test2: "test2", test3: "test3" },
    { test1: "test11", test2: "test2", test3: "test3" },
    { test1: "test12", test2: "test2", test3: "test3" },
    { test1: "test13", test2: "test2", test3: "test3" },
    { test1: "test14", test2: "test2", test3: "test3" },
    { test1: "test15", test2: "test2", test3: "test3" },
    { test1: "test16", test2: "test2", test3: "test3" },
    { test1: "test17", test2: "test2", test3: "test3" },
    { test1: "test18", test2: "test2", test3: "test3" },
    { test1: "test19", test2: "test2", test3: "test3" },
    { test1: "test20", test2: "test2", test3: "test3" },
    { test1: "test21", test2: "test2", test3: "test3" },
  ])
  let [currentPage, setCurrentPage] = useState(2)
  let [numbPerPage, setNumberPerPage] = useState(7)
  let [testToShow, setTestToShow] = useState()
  const nextPage = () => {
    console.log(currentPage, "in next page")
    if (currentPage === Math.ceil(tests.length / numbPerPage)) {
    } else {
      setCurrentPage((currentPage += 1))
      getPaginate()
    }
  }
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage -= 1))
      getPaginate()
    }
  }

  const getPaginate = () => {
    let startIndex = currentPage * numbPerPage - numbPerPage
    let endIndex = startIndex + numbPerPage
    let tab = tests.slice(startIndex, endIndex)
    setTestToShow(tab)
  }

  const changeNumPerPage = (e) => {
    let value = parseInt(e.target.value)
    setNumberPerPage(value)
    setCurrentPage(1)
    getPaginate()
  }
  const [loading, setLoading] = useState()
  const [commands, setCommands] = useState()
  const [users, setUsers] = useState()
  console.log(users)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)

      let usersRes = await fetchUsers()
      setUsers(usersRes)
      let commandsRes = await fetchCommands()
      setCommands(commandsRes)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      console.debug(usersRes, "debug")
    }
    getData()
  }, [])
  useEffect(() => {
    getPaginate()
  }, [numbPerPage])
  return (
    <div className="App">
      <div
        style={{
          width: "500px",
          margin: "50px auto",
        }}
      >
        {loading ? (
          <SnowLoader />
        ) : (
          users &&
          users.map((user) => (
            <li>
              {user.user_id} : {user.first_name}
            </li>
          ))
        )}

        <h1>test</h1>

        {!loading ? "la" : "reas"}
        <select onChange={(e) => changeNumPerPage(e)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="30">30</option>
        </select>
        <table>
          <thead>
            <tr>
              <td>test</td>
              <td>test1</td>
              <td>test2</td>
            </tr>
          </thead>
          <tbody>
            {testToShow &&
              testToShow.map((test, index) => (
                <tr key={index}>
                  <td>{test.test1}</td>
                  <td>{test.test2}</td>
                  <td>{test.test3}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="paginate">
          <button onClick={() => previousPage()}>Page précédente</button>
          <p>
            page {currentPage}/{Math.ceil(tests.length / numbPerPage)}
          </p>
          <button onClick={nextPage}>Page suivante</button>
        </div>
        {/* <Form /> */}
      </div>
    </div>
  )
}

export default App
