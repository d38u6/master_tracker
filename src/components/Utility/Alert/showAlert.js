import React from "react";
import ReactDOM from "react-dom";

export function showAlert(callback, props) {
  const alertWrapper = document.createElement("div");

  const onCloseHandler = () => {
    ReactDOM.unmountComponentAtNode(alertWrapper);
    if (document.body.contains(alertWrapper))
      document.body.removeChild(alertWrapper);
  };

  const alert = callback({ onClose: onCloseHandler, ...props });

  if (React.isValidElement(alert)) {
    ReactDOM.render(alert, alertWrapper);
    document.body.appendChild(alertWrapper);
  }
}
