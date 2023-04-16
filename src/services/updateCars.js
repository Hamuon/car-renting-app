import http from "./httpService";

export default function updateCars(id, data) {
  return http.put(`/cardData/${id}`, data);
}
