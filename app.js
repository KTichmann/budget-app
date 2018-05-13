import React from "react";
import ReactDOM from "react-dom";
import BudgetApp from "./scripts/components/BudgetApp";
import './scripts/styles.scss'
import 'normalize.css/normalize.css'
import Bootstrap from './node_modules/bootstrap/dist/css/bootstrap.css'
//Add sass file & styles folders // styles / base / components
ReactDOM.render(<BudgetApp />, document.getElementById("app"))
