const MoltinGateway = require('@moltin/sdk').gateway;
const axios = require('axios');

let client_id = 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4';

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID;
}

const Moltin = MoltinGateway({
  client_id,
  application: 'react-demo-store'
});

export const GetProducts = () => {
  return axios.get('http://localhost:8080/allProjects');
};

/*
export const GetProducts = () =>
  Moltin.Products.With('files, main_images, collections').All();
*/

export const GetProduct = ID => {
  axios
    .get('http://localhost:8080/searchByProjects/', {
      params: {
        id: ID
      }
    })
    .then(res => {
      console.log(res.data);
    });
  return Moltin.Products.Get(ID);
};

// export const GetProduct = ID => Moltin.Products.Get(ID);

// TODO PHASE OUT THIS METHOD.
export const GetCategories = () => Moltin.Categories.With('products').All();

export const GetCategory = ID => {
  axios
    .get('http://localhost:8080/', {
      params: {
        id: ID
      }
    })
    .then(res => {
      console.log(res);
    });
  return Moltin.Categories.Get(ID);
};

//export const GetCategory = ID => Moltin.Categories.Get(ID);

// export const GetCollections = () => Moltin.Collections.With('products').All();

export const GetCollections = () => new Promise(() => [], () => []);

export const GetBrands = () => Moltin.Brands.All();

export const GetFile = ID => Moltin.Files.Get(ID);

export const AddCart = (id, quantity) => Moltin.Cart.AddProduct(id, quantity);

export const UpdateCartPlus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity + 1);

export const UpdateCartMinus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity - 1);

export const UpdateCart = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity);

export const GetCartItems = () => Moltin.Cart.Items();

export const Checkout = data => Moltin.Cart.Checkout(data);

export const GetOrder = ID => Moltin.Orders.Get(ID);

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

export const DeleteCart = () => Moltin.Cart.Delete();
