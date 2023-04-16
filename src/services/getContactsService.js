import http from "./httpService";

export default function getCars() {
  return http.get("/cardData");
}
