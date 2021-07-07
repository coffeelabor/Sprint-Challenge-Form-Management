import { useState, useEffect } from "react";
import Axios from "axios";

export const useToken = param => {
  const [state, setState] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5000/api/restricted/data";
    if (token) {
      Axios.get(url, { headers: { Authorization: ` ${token}` } })
        .then(res => {
          console.log("Res inside .then .get", res);
          setState(res.data);
        })
        .catch(err => {
          console.log("catch error", err);
        });
    }
  }, [param]);

  const setValue = value => {
    localStorage.setItem(param, value);
  };

  return [state, setState, setValue];
};
