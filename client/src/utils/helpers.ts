import axios from "axios";
import { API_URI } from "../Config";

export const getData = async (setApiData: any) => {
  let res: any = await fetch("https://api.attackontitanapi.com/characters");
  res = await res.json();
  console.log(res);
  setApiData(res?.results || []);
};

export const getDataFromServer = async (url: string) => {
  const data = await axios.get(`${API_URI}${url}`);
  return data.data;
};
