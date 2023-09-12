const baseUrl = "http://localhost:3000";
import axios from "axios";

export const getClients = async () => {
  const res = axios("clients", {
    baseURL: baseUrl,
    method: "get",
  }).then((res) => res.data);

  return res;
};

export const incrementClientVote = async (clientId: number) => {
  const res = axios(`votes/${clientId}`, {
    baseURL: baseUrl,
    method: "post",
  }).then((res) => res.data);

  return res;
};
