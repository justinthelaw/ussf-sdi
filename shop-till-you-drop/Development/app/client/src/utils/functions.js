export const handleEdit = async (
  e,
  storeId,
  itemId,
  newName,
  newQuant,
  done,
  type,
  baseURL
) => {
  e.preventDefault();
  switch (type) {
    case "store":
      await editStore(storeId, newName, baseURL);
      break;

    case "item":
      await editItem(itemId, newName, newQuant, done, baseURL);
      break;

    default:
      alert("Something went wrong! Please reload the page.");
  }
};

export const handleDelete = async (e, storeId, itemId, type, baseURL) => {
  e.preventDefault();
  switch (type) {
    case "store":
      await delStore(storeId, baseURL);
      break;

    case "item":
      await delItem(itemId, baseURL);
      break;

    default:
      alert("Something went wrong! Please reload the page.");
  }
};

export const handleNew = async (
  e,
  userId,
  storeId,
  name,
  quantity,
  type,
  baseURL
) => {
  e.preventDefault();
  switch (type) {
    case "store":
      await newStore(userId, name, baseURL);
      break;

    case "item":
      newItem(userId, storeId, name, quantity, baseURL);
      break;

    default:
      alert("Something went wrong! Please reload the page.");
  }
};

const newStore = async (userId, name, baseURL) => {
  await fetch(`${baseURL}/stores/post`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, name: name }),
  }).catch((err) => console.log(err));
};

const delStore = async (storeId, baseURL) => {
  await fetch(`${baseURL}/stores/delete`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeId: storeId }),
  }).catch((err) => console.log(err));
};

const editStore = async (storeId, newName, baseURL) => {
  await fetch(`${baseURL}/stores/patch`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeId: storeId, name: newName }),
  }).catch((err) => console.log(err));
};

const delItem = async (itemId, baseURL) => {
  await fetch(`${baseURL}/items/delete`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId: itemId }),
  }).catch((err) => console.log(err));
};

const newItem = async (userId, storeId, name, quantity, baseURL) => {
  await fetch(`${baseURL}/items/post`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      storeId: storeId,
      name: name,
      quantity: quantity,
    }),
  }).catch((err) => console.log(err));
};

const editItem = async (itemId, newName, newQuant, done, baseURL) => {
  await fetch(`${baseURL}/items/patch`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      itemId: itemId,
      name: newName,
      quantity: newQuant,
      done: done,
    }),
  }).catch((err) => console.log(err));
};
