import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./css/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
