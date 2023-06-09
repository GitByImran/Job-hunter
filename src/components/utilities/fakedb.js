import { toast } from "react-toastify";
// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    toast("Added to applied !!");
    shoppingCart[id] = 1;
  } else {
    toast.warn("You have already applied !!");
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
