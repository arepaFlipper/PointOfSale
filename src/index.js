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
  products: [
      {
        id: { $oid: "5dc47917fc13ae117a000000" },
        title: "Y-Solowarm",
        image: "https://robohash.org/estdoloremsunt.jpg?size=300x300&set=set1",
        price: "$2.33",
        description: "The Mentholatum Company"
      },
      {
        id: { $oid: "5dc47917fc13ae117a000001" },
        title: "Zathin",
        image:
          "https://robohash.org/repellendusvoluptasaut.png?size=300x300&set=set1",
        price: "$9.57",
        description: "TRP Company"
      },
      {
        id: { $oid: "5dc47917fc13ae117a000002" },
        title: "Greenlam",
        image: "https://robohash.org/absintaccusamus.png?size=300x300&set=set1",
        price: "$5.29",
        description: "State of Florida DOH Central Pharmacy"
      },
      {
        id: { $oid: "5dc47917fc13ae117a000003" },
        title: "Quo Lux",
        image:
          "https://robohash.org/fugiatexcepturiperspiciatis.png?size=300x300&set=set1",
        price: "$7.02",
        description: "Wal-Mart Stores Inc"
      },
      {
        id: { $oid: "5dc47917fc13ae117a000004" },
        title: "Aerified",
        image:
          "https://robohash.org/natusharumitaque.jpg?size=300x300&set=set1",
        price: "$3.66",
        description: "West-ward Pharmaceutical Corp"
      },
      {
        id: { $oid: "5dc47917fc13ae117a000005" },
        title: "Viva",
        image: "https://robohash.org/aliassititaque.png?size=300x300&set=set1",
        price: "$4.68",
        description: "Integra Health International, S.A. de C.V."
      },
      {
        id: { $oid: "5dc47917fc13ae117a000006" },
        title: "Quo Lux",
        image:
          "https://robohash.org/rerumofficiaiusto.jpg?size=300x300&set=set1",
        price: "$0.06",
        description: "Physicians Total Care, Inc."
      }
  ],
  categories: [
    {
      id: { $oid: "5db8cdf9fc13ae52a4000000" },
      logo: "https://lorempixel.com/500/400/food/3",
      title: "PIZZA"
    },
    {
      id: { $oid: "5db8cdf9fc13ae52a4000001" },
      logo: "https://lorempixel.com/500/400/food",
      title: "PASTELES"
    },
    {
      id: { $oid: "5db8cdf9fc13ae52a4000002" },
      logo: "https://lorempixel.com/500/400/food/9",
      title: "HAMBURGUESAS"
    },
    {
      id: { $oid: "5db8cdf9fc13ae52a4000003" },
      logo: "https://lorempixel.com/500/400/food/1",
      title: "BOWLS"
    },
    {
      id: { $oid: "5db8cdf9fc13ae52a4000004" },
      logo: "https://lorempixel.com/500/400/food/8",
      title: "SUSHI"
    },
    {
      id: { $oid: "5db8cdf9fc13ae52a4000005" },
      logo: "https://lorempixel.com/500/400/food/5",
      title: "BEBIDAS"
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
