import axios from "axios";

export const instance = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: "45187573-35349e9a2b2dc83c7ef985120",
   
  },
});
