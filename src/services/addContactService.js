import http from "./httpService";

export default function addOneContact(data) {
  return http.post(`/contacts`, data);
}
