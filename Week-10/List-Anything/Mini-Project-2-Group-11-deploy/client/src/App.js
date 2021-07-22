// dependencies
import { useEffect, useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

// components

function App() {
  let [list, setList] = useState([]);
  let [inputItem, setInputItem] = useState([]);
  let [inputUpdateItem, setInputUpdateItem] = useState([]);
  let [change, setChange] = useState(false);
  let [updatingItem, setUpdatingItem] = useState(null);

  const urlEnv = process.env.NODE_ENV;

  useEffect(() => {
    async function getList() {
      let list = await fetch("https://list-anything-api.herokuapp.com/list")
        .then((result) => result.json())
        .then((data) => data)
        .then((data) => setList(data));

      return list;
    }
    console.log(urlEnv);
    getList();
  }, [change]);

  const handleSubmit = async (e) => {
    let dataToSend = {
      text: inputItem,
    };

    async function addToList(dataToSend) {
      let add = await fetch("https://list-anything-api.herokuapp.com/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      return add;
    }

    await addToList(dataToSend);
    await setChange(!change);
  };

  const handleDelete = async (e, itemToDelete) => {
    let dataToDelete = {
      id: itemToDelete,
    };

    async function deleteData(dataToDelete) {
      let deleteData = await fetch(
        "https://list-anything-api.herokuapp.com/list",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToDelete),
        }
      );

      return deleteData;
    }

    await deleteData(dataToDelete);
    await setChange(!change);
  };

  const handleUpdate = async (e, itemToUpdate) => {
    let dataToUpdate = {
      id: itemToUpdate,
      text: inputUpdateItem,
    };

    async function updateData(dataToUpdate) {
      let updateData = await fetch(
        "https://list-anything-api.herokuapp.com/list",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToUpdate),
        }
      );

      return updateData;
    }

    await updateData(dataToUpdate);
    await setUpdatingItem(null);
    await setChange(!change);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    await setInputItem(e.target.value);
  };

  const handleUpdateChange = async (e) => {
    e.preventDefault();
    await setInputUpdateItem(e.target.value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "[first] 40px [centerLeft] auto [center] 100px [centerRight] 40px [end]",
        justifyItems: "center",
      }}
    >
      <h1
        style={{
          gridColumn: "centerLeft / centerRight",
          marginBottom: 0,
        }}
      >
        List Anything
      </h1>
      <p
        style={{
          gridColumn: "centerLeft / centerRight",
          marginTop: 0,
        }}
      >
        Mini-Full-Stack-Project 2: Group 11
      </p>
      <form
        style={{
          gridColumn: "centerLeft / centerRight",
        }}
      >
        <label htmlFor="item" style={{ fontSize: "large" }}>
          Add an Item:{" "}
        </label>
        <input
          type="text"
          onChange={handleChange}
          style={{ marginRight: 5, marginTop: 10, marginBottom: 30 }}
        />
        <Button onClick={handleSubmit} type="primary">
          SUBMIT
        </Button>
      </form>
      <ul
        style={{
          gridColumn: "centerLeft / centerRight",
        }}
      >
        {list.map((listItem) => (
          <li
            style={{
              listStyleType: "circle",
              // display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
            }}
          >
            {updatingItem !== listItem.id ? (
              `${listItem.text}`
            ) : (
              <input
                type="text"
                onChange={handleUpdateChange}
                defaultValue={listItem.text}
              />
            )}
            {updatingItem !== listItem.id ? (
              <>
                <Button
                  onClick={(e) => setUpdatingItem(listItem.id)}
                  style={{
                    alignSelf: "end",
                  }}
                >
                  UPDATE
                </Button>
                <Button
                  onClick={(e) => handleDelete(e, listItem.id)}
                  type="danger"
                >
                  DELETE
                </Button>
              </>
            ) : (
              <Button
                onClick={(e) => handleUpdate(e, listItem.id)}
                type="primary"
              >
                SUBMIT UPDATE
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
