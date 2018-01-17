import React from "react";
import ReactDOM from "react-dom";
import "./Skeleton/skeleton.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
