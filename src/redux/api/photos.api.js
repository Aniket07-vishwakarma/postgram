import axios from "axios";
import env from "../../common/env";

export const fetchPhotosData = async () => {
  const { data } = await axios.get(`${env.BASE_ENDPOINT}/photos`);
  return data;
};

