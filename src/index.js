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
      id: { $oid: "5db09e1dfc13ae4d4b000000" },
      image: "http://dummyimage.com/1089x1850.png/ff4444/ffffff",
      tittle: 11,
      price: "$5.02",
      description: "Managed didactic framework"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000001" },
      image: "http://dummyimage.com/856x1817.png/cc0000/ffffff",
      tittle: 9,
      price: "$8.68",
      description: "Down-sized content-based definition"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000002" },
      image: "http://dummyimage.com/1057x1951.png/ff4444/ffffff",
      tittle: 10,
      price: "$5.88",
      description: "Horizontal cohesive infrastructure"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000003" },
      image: "http://dummyimage.com/1584x1421.png/cc0000/ffffff",
      tittle: 9,
      price: "$7.28",
      description: "Reactive zero administration protocol"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000004" },
      image: "http://dummyimage.com/1063x1714.png/5fa2dd/ffffff",
      tittle: 18,
      price: "$9.27",
      description: "Inverse analyzing implementation"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000005" },
      image: "http://dummyimage.com/1269x1072.png/cc0000/ffffff",
      tittle: 12,
      price: "$3.36",
      description: "Seamless multi-state instruction set"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000006" },
      image: "http://dummyimage.com/1898x1226.png/cc0000/ffffff",
      tittle: 8,
      price: "$7.30",
      description: "Sharable full-range internet solution"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000007" },
      image: "http://dummyimage.com/994x1881.png/cc0000/ffffff",
      tittle: 8,
      price: "$4.31",
      description: "Assimilated eco-centric success"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000008" },
      image: "http://dummyimage.com/1442x1462.png/5fa2dd/ffffff",
      tittle: 11,
      price: "$6.16",
      description: "Stand-alone tangible toolset"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000009" },
      image: "http://dummyimage.com/1764x1487.png/cc0000/ffffff",
      tittle: 4,
      price: "$7.57",
      description: "Monitored 24 hour matrix"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000a" },
      image: "http://dummyimage.com/1295x1190.png/5fa2dd/ffffff",
      tittle: 9,
      price: "$5.31",
      description: "Cross-group zero defect circuit"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000b" },
      image: "http://dummyimage.com/985x1419.png/cc0000/ffffff",
      tittle: 10,
      price: "$3.00",
      description: "Persistent grid-enabled software"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000c" },
      image: "http://dummyimage.com/1719x1446.png/cc0000/ffffff",
      tittle: 10,
      price: "$7.78",
      description: "Quality-focused disintermediate task-force"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000d" },
      image: "http://dummyimage.com/1529x1801.png/ff4444/ffffff",
      tittle: 8,
      price: "$6.76",
      description: "Object-based 3rd generation system engine"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000e" },
      image: "http://dummyimage.com/1378x1855.png/ff4444/ffffff",
      tittle: 15,
      price: "$3.12",
      description: "Pre-emptive asynchronous archive"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b00000f" },
      image: "http://dummyimage.com/1004x1130.png/dddddd/000000",
      tittle: 8,
      price: "$7.32",
      description: "Assimilated bandwidth-monitored neural-net"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000010" },
      image: "http://dummyimage.com/1791x1904.png/ff4444/ffffff",
      tittle: 8,
      price: "$9.45",
      description: "Implemented high-level help-desk"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000011" },
      image: "http://dummyimage.com/1660x1007.png/cc0000/ffffff",
      tittle: 12,
      price: "$8.82",
      description: "Pre-emptive modular algorithm"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000012" },
      image: "http://dummyimage.com/829x1244.png/5fa2dd/ffffff",
      tittle: 14,
      price: "$3.94",
      description: "Pre-emptive motivating projection"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000013" },
      image: "http://dummyimage.com/1361x828.png/cc0000/ffffff",
      tittle: 8,
      price: "$4.12",
      description: "Cross-group coherent attitude"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000014" },
      image: "http://dummyimage.com/1252x1045.png/cc0000/ffffff",
      tittle: 11,
      price: "$9.08",
      description: "Self-enabling demand-driven focus group"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000015" },
      image: "http://dummyimage.com/1129x1925.png/ff4444/ffffff",
      tittle: 10,
      price: "$3.18",
      description: "Intuitive global moratorium"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000016" },
      image: "http://dummyimage.com/1222x960.png/cc0000/ffffff",
      tittle: 11,
      price: "$3.70",
      description: "Realigned tangible secured line"
    },
    {
      id: { $oid: "5db09e1dfc13ae4d4b000017" },
      image: "http://dummyimage.com/1207x1134.png/ff4444/ffffff",
      tittle: 10,
      price: "$6.18",
      description: "Streamlined attitude-oriented leverage"
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
