import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="VentanaMolesta">
        <div className="changeAlert">
          <p className="alertIcon">⚠</p>
          <p>Hubo cambios</p>
          <button onClick={() => toggleShow(false)}>
            Volver a cargar la información
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
