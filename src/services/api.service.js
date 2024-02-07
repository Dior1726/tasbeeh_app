import axios from "axios";

const ApiService = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default ApiService;
