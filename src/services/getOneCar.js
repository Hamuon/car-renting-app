import http from "./httpService";

export default function getOneCar(id) {
  return http.get(`/cardData/${id}`);
}
