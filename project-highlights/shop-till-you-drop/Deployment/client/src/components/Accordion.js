// dependencies
import React, { useContext, useState } from "react";
import { handleNew, handleDelete, handleEdit } from "../utils/functions";
import AppContext from "../contexts/AppContext";
import auth from "../utils/auth";
import Cookies from "js-cookie";

// components
import AlertDialog from "./AlertDialog";
import {
  ExpandMore,
  Delete,
  Edit,
  PlaylistAddCheck,
  NotListedLocation,
} from "@material-ui/icons";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  ListItem,
  Grid,
  Paper,
  Button,
  Tooltip,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightBold,
  },
  paperItem: {
    padding: theme.spacing(2.5),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  paperQuant: {
    padding: theme.spacing(2.5),
    textAlign: "center",
    color: theme.palette.text.primary,
    width: 150,
  },
  paperAct: {
    padding: theme.spacing(2.5),
    textAlign: "center",
    color: theme.palette.text.primary,
    width: 200,
  },
  button: {
    maxWidth: 50,
    maxHeight: 30,
    minWidth: 50,
    minHeight: 30,
  },
  buttonEdit: {
    maxWidth: 70,
    maxHeight: 40,
    minWidth: 70,
    minHeight: 40,
  },
  buttonEditItem: {
    maxWidth: 70,
    maxHeight: 30,
    minWidth: 70,
    minHeight: 30,
    marginTop: -2.5,
    marginBottom: -3.5,
    fontSize: 15,
  },
}));

export default function MyAccordion({ body }) {
  const { currentUser } = useContext(AppContext);
  const { items, setItems } = useContext(AppContext);
  const { stores, setStores } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);
  const { setOpen } = useContext(AppContext);
  const { baseURL } = useContext(AppContext);
  const { googleAPIKey } = useContext(AppContext);
  const { alert, setAlert } = useContext(AppContext);

  const [openStoreEdit, setOpenStoreEdit] = useState(0);
  const [openItemEdit, setOpenItemEdit] = useState(0);
  const [location, setLocation] = useState(null);

  const classes = useStyles();
  const shadow = 2;

  const handleNewItem = async (e, store) => {
    e.preventDefault();
    let newItemName = document.getElementById(`${store.name}item`).value;
    let quantity = document.getElementById(`${store.name}quantity`).value;
    if (
      newItemName.length > 0 &&
      !items.find(
        (item) => item.name === newItemName && item.store_id === store.id
      )
    ) {
      await handleNew(
        e,
        currentUser.userId,
        store.id,
        newItemName,
        quantity,
        "item",
        baseURL
      );
      await setAlert({
        title: "Success!",
        text: `${newItemName} (${quantity}) has been added to the ${store.name} list!`,
        actions: "",
      });
      await setReload(true);
      await setReload(!reload);
      // await setOpen(true);
    } else if (newItemName.length === 0) {
      await setAlert({
        title: "Add Item Error",
        text: `You tried to add nothing! Please try again.`,
        actions: "",
      });
      await setReload(true);
      await setReload(!reload);
      await setOpen(true);
    } else {
      await setAlert({
        title: "Add Item Error",
        text: `${newItemName} (${quantity}) already exists in ${store.name}!`,
        actions: "",
      });
      await setReload(true);
      await setReload(!reload);
      await setOpen(true);
    }
  };

  const handleDelStore = async (e, store) => {
    e.preventDefault();

    await setAlert({
      title: `Delete ${store.name}`,
      text: `Are you sure you want to delete ${store.name} and all its items?`,
      actions: (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginBottom: -5, marginRight: 5 }}
          onClick={async (e) => {
            await handleDelete(e, store.id, null, "store", baseURL);
            await setReload(true);
            await setReload(!reload);
            await setOpen(false);
            await setAlert({
              title: "Success!",
              text: `${store.name} and all its items have been deleted!`,
              actions: "",
            });
            await setOpen(true);
            if (stores.length === 1) {
              window.location.href = `${window.location.origin}/lists`;
            }
          }}
        >
          Confirm
        </Button>
      ),
    });
    await setOpen(true);
  };

  const handleDelItem = async (e, item, store) => {
    e.preventDefault();
    await handleDelete(e, null, item.id, "item", baseURL);
    await setAlert({
      title: "Success!",
      text: `${item.name} (${item.quantity}) has been deleted from the ${store.name} list!`,
      actions: "",
    });
    await setReload(true);
    await setReload(!reload);
    // await setOpen(true);
  };

  const handleEditStore = async (e, store) => {
    e.preventDefault();
    let editStoreName = document.getElementById("editStoreTarget").value;
    let oldStoreName = store.name;
    await handleEdit(
      e,
      store.id,
      null,
      editStoreName,
      null,
      null,
      "store",
      baseURL
    );
    await setAlert({
      title: "Success!",
      text: `${oldStoreName} has been changed to ${editStoreName}!`,
      actions: "",
    });
    await setReload(true);
    await setReload(!reload);
    await setOpenStoreEdit(0);
    // await setOpen(true);
  };

  const handleEditItem = async (e, item, store, check) => {
    e.preventDefault();
    if (check) {
      let oldItemName = item.name;
      let oldQuantity = item.quantity;
      await handleEdit(
        e,
        store.id,
        item.id,
        oldItemName,
        oldQuantity,
        !item.done,
        "item",
        baseURL
      );
      await setAlert({
        title: "Success!",
        text: `${oldItemName} (${oldQuantity}) set to ${
          !item.done ? "complete" : "incomplete"
        }!`,
        actions: "",
      });
    } else {
      let editItemName = document.getElementById("editItemTarget").value;
      let editQuantity = document.getElementById("editQuantityTarget").value;
      let oldItemName = item.name;
      let oldQuantity = item.quantity;
      await handleEdit(
        e,
        store.id,
        item.id,
        editItemName,
        editQuantity,
        item.done,
        "item",
        baseURL
      );
      await setAlert({
        title: "Success!",
        text: `${oldItemName} (${oldQuantity}) has been changed to ${editItemName} (${editQuantity})!`,
        actions: "",
      });
    }
    await setReload(true);
    await setReload(!reload);
    await setOpenItemEdit(0);
    // await setOpen(true);
  };

  try {
    return (
      <div className={classes.root}>
        <AlertDialog bodyAlert={alert} />
        {body.map((store) => {
          return (
            <Accordion
              key={`${store.name}${store.id}`}
              style={{ marginTop: 15 }}
            >
              <AccordionSummary
                expandIcon={
                  <Tooltip title={`Expand ${store.name}`}>
                    <ExpandMore />
                  </Tooltip>
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {store.id === openStoreEdit ? (
                  <TextField
                    id="editStoreTarget"
                    label="Edit Store"
                    variant="outlined"
                    placeholder="Edit Store"
                    defaultValue={store.name}
                    style={{
                      width: 310,
                    }}
                    size="small"
                  />
                ) : (
                  <Tooltip title={`Expand ${store.name}`}>
                    <Typography className={classes.heading} variant="h1">
                      {store.name}
                    </Typography>
                  </Tooltip>
                )}
                {store.id === openStoreEdit ? (
                  <>
                    <Tooltip title={`Submit Changes`}>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        className={classes.buttonEdit}
                        style={{
                          marginLeft: 15,
                        }}
                        onClick={(e) => {
                          handleEditStore(e, store);
                        }}
                      >
                        Submit
                      </Button>
                    </Tooltip>
                    <Tooltip title={`Cancel Edit`}>
                      <Button
                        color="secondary"
                        variant="contained"
                        size="small"
                        className={classes.buttonEdit}
                        style={{
                          marginLeft: 15,
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenStoreEdit(0);
                        }}
                      >
                        Cancel
                      </Button>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    <Tooltip title={`Find a ${store.name} near you`}>
                      <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        style={{
                          marginLeft: 15,
                        }}
                        color="primary"
                        onClick={async (e) => {
                          e.preventDefault();

                          await fetch(
                            `https://www.googleapis.com/geolocation/v1/geolocate?key=${googleAPIKey}`,
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                            }
                          )
                            .then((res) => res.json())
                            .then(
                              async (data) => await setLocation(data.location)
                            )
                            .catch((err) => console.log(err));

                          await window.open(
                            `https://www.google.com/maps/search/${store.name}/@${location.lat},${location.lng},13z`
                          );
                        }}
                      >
                        <NotListedLocation />
                      </Button>
                    </Tooltip>
                    <Tooltip title={`Edit ${store.name}`}>
                      <Button
                        color="default"
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        style={{
                          marginLeft: 15,
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenStoreEdit(store.id);
                        }}
                      >
                        <Edit />
                      </Button>
                    </Tooltip>
                    <Tooltip title={`Delete ${store.name}`}>
                      <Button
                        color="secondary"
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        style={{
                          marginLeft: 15,
                        }}
                        onClick={(e) => handleDelStore(e, store)}
                      >
                        <Delete />
                      </Button>
                    </Tooltip>
                  </>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Paper
                      style={{
                        textAlign: "center",
                        paddingTop: 7.25,
                        paddingBottom: 15,
                        width: 590,
                        marginLeft: 15,
                      }}
                      elevation={2}
                    >
                      <Typography style={{ fontWeight: 600, margin: 7 }}>
                        {`Add To ${store.name} List`}
                      </Typography>
                      <form>
                        <Tooltip title="New Item">
                          <TextField
                            id={`${store.name}item`}
                            label="Add Item"
                            variant="outlined"
                            placeholder="Item"
                            style={{
                              width: 310,
                            }}
                            size="small"
                          />
                        </Tooltip>
                        <Tooltip title="Quantity">
                          <TextField
                            id={`${store.name}quantity`}
                            label="Quantity"
                            variant="outlined"
                            placeholder="E.g. 1 lb, 3 bags, 5 cans"
                            style={{
                              width: 150,
                              marginLeft: 10,
                            }}
                            size="small"
                          />
                        </Tooltip>
                        <Tooltip title="Add New Item">
                          <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            size="large"
                            style={{
                              marginLeft: 10,
                              maxWidth: 80,
                              maxHeight: 40,
                              minWidth: 80,
                              minHeight: 40,
                              fontWeight: 600,
                            }}
                            onClick={(e) => handleNewItem(e, store)}
                          >
                            Submit
                          </Button>
                        </Tooltip>
                      </form>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItem>
                      <Grid container spacing={1}>
                        <Grid item xs>
                          <Tooltip title={`Item Description`}>
                            <Paper
                              elevation={shadow}
                              className={classes.paperItem}
                            >
                              <Typography style={{ fontWeight: 600 }}>
                                Description
                              </Typography>
                            </Paper>
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Tooltip title={`Required Units of an Item`}>
                            <Paper
                              elevation={shadow}
                              className={classes.paperQuant}
                            >
                              <Typography style={{ fontWeight: 600 }}>
                                Quantity
                              </Typography>
                            </Paper>
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Tooltip title={`Item Actions`}>
                            <Paper
                              elevation={shadow}
                              className={classes.paperAct}
                            >
                              <Typography style={{ fontWeight: 600 }}>
                                Actions
                              </Typography>
                            </Paper>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </Grid>

                  {store.list.map((item) => (
                    <Grid item xs={12} key={`${item.name}${item.id}`}>
                      {openItemEdit !== item.id ? (
                        <ListItem>
                          <Grid container spacing={1}>
                            <Grid item xs>
                              <Paper
                                elevation={shadow}
                                className={classes.paperItem}
                              >
                                <Typography>
                                  {item.done ? "✔️ " : "❌ "}
                                  {item.name}
                                </Typography>
                              </Paper>
                            </Grid>
                            <Grid item>
                              <Paper
                                elevation={shadow}
                                className={classes.paperQuant}
                              >
                                <Typography>{item.quantity}</Typography>
                              </Paper>
                            </Grid>
                            <Grid item>
                              <Paper
                                elevation={shadow}
                                className={classes.paperAct}
                              >
                                <Tooltip
                                  title={`Toggle completeness for ${item.name}`}
                                >
                                  <Button
                                    className={classes.button}
                                    style={{
                                      marginTop: -2.5,
                                      marginBottom: -3.5,
                                    }}
                                    color="primary"
                                    variant="outlined"
                                    onClick={(e) =>
                                      handleEditItem(e, item, store, true)
                                    }
                                  >
                                    <PlaylistAddCheck />
                                  </Button>
                                </Tooltip>
                                <Tooltip title={`Edit ${item.name}`}>
                                  <Button
                                    className={classes.button}
                                    style={{
                                      marginTop: -2.5,
                                      marginBottom: -3.5,
                                    }}
                                    color="default"
                                    variant="outlined"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenItemEdit(item.id);
                                    }}
                                  >
                                    <Edit />
                                  </Button>
                                </Tooltip>
                                <Tooltip title={`Delete ${item.name}`}>
                                  <Button
                                    className={classes.button}
                                    style={{
                                      marginTop: -2.5,
                                      marginBottom: -3.5,
                                    }}
                                    color="secondary"
                                    variant="outlined"
                                    onClick={(e) =>
                                      handleDelItem(e, item, store)
                                    }
                                  >
                                    <Delete />
                                  </Button>
                                </Tooltip>
                              </Paper>
                            </Grid>
                          </Grid>
                        </ListItem>
                      ) : (
                        <ListItem>
                          <Grid container spacing={1}>
                            <Grid item xs>
                              <Paper
                                elevation={shadow}
                                className={classes.paperItem}
                              >
                                <TextField
                                  id="editItemTarget"
                                  label="Edit Item"
                                  variant="outlined"
                                  placeholder="Edit Item"
                                  defaultValue={item.name}
                                  style={{
                                    width: 500,
                                    marginTop: -8.25,
                                    marginBottom: -8.25,
                                  }}
                                  size="small"
                                />
                              </Paper>
                            </Grid>
                            <Grid item>
                              <Paper
                                elevation={shadow}
                                className={classes.paperQuant}
                              >
                                <TextField
                                  id="editQuantityTarget"
                                  label="Edit Quantity"
                                  variant="outlined"
                                  placeholder="Edit Quantity"
                                  defaultValue={item.quantity}
                                  style={{
                                    width: 100,
                                    marginTop: -8.25,
                                    marginBottom: -8.25,
                                  }}
                                  size="small"
                                />
                              </Paper>
                            </Grid>
                            <Grid item>
                              <Paper
                                elevation={shadow}
                                className={classes.paperAct}
                              >
                                <Tooltip
                                  title={`Submit changes for ${item.name}`}
                                >
                                  <Button
                                    className={classes.buttonEditItem}
                                    color="primary"
                                    variant="contained"
                                    onClick={(e) =>
                                      handleEditItem(e, item, store)
                                    }
                                  >
                                    Submit
                                  </Button>
                                </Tooltip>
                                <Tooltip
                                  title={`Cancel changes for ${item.name}`}
                                >
                                  <Button
                                    className={classes.buttonEditItem}
                                    color="secondary"
                                    variant="contained"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenItemEdit(0);
                                    }}
                                    style={{ marginLeft: 10 }}
                                  >
                                    Cancel
                                  </Button>
                                </Tooltip>
                              </Paper>
                            </Grid>
                          </Grid>
                        </ListItem>
                      )}
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  } catch {
    auth.logout(async () => {
      await setItems([]);
      await setStores([]);
      await Cookies.remove("token");
      window.location.href = `${window.location.origin}/`;
    });
  }
}
