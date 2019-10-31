import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import App from "./routes/App";
import Login from "./containers/Login";
import reducer from "./reducers";

const initialState = {
  user: {},
  cart: [],
  categories: [
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000000"},
        "logo":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiwie_u2cLlAhUDvFkKHUvcAvIQjRx6BAgBEAQ&url=https%3A%2F%2Ftasty.co%2Frecipe%2F2-ingredient-dough-pizza&psig=AOvVaw1ROWk6D40BzZOvFBg4ZONy&ust=1572480867875211",
        "title":"Le Gassick"
      },
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000001"},
        "logo":"http://dummyimage.com/94x47.png/dddddd/000000",
        "title":"Norsworthy"
      },
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000002"},
        "logo":"http://dummyimage.com/76x50.jpg/cc0000/ffffff",
        "title":"Kernoghan"
      },
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000003"},
        "logo":"http://dummyimage.com/87x87.bmp/ff4444/ffffff",
        "title":"Murrhardt"
      },
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000004"},
        "logo":"http://dummyimage.com/76x48.jpg/5fa2dd/ffffff",
        "title":"Cortez"
      },
      {
        "id":{"$oid":"5db8cdf9fc13ae52a4000005"},
        "logo":"http://dummyimage.com/74x80.bmp/ff4444/ffffff",
        "title":"Leacy"
      }
  ],
  products: [
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000000"},
      "logo":"https://lorempixel.com/500/400/food/3",
      "title":"PIZZA"
    },
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000001"},
      "logo":"https://lorempixel.com/500/400/food",
      "title":"PASTELES"
    },
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000002"},
      "logo":"https://lorempixel.com/500/400/food/9",
      "title":"HAMBURGUESAS"
    },
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000003"},
      "logo":"https://lorempixel.com/500/400/food/1",
      "title":"BOWLS"
    },
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000004"},
      "logo":"https://lorempixel.com/500/400/food/8",
      "title":"SUSHI"
    },
    {
      "id":{"$oid":"5db8cdf9fc13ae52a4000005"},
      "logo":"https://lorempixel.com/500/400/food/5",
      "title":"BEBIDAS"
    }
  ]
};
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
