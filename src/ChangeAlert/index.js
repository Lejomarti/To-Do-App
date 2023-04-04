import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}) {
  const { show, toggleShow } = useStorageListener(sincronize);


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


export { ChangeAlert };
