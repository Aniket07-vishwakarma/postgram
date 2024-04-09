import axios from "axios";
import env from "../../common/env";

export const fetchAlbumsData = async () => {
  const { data } = await axios.get(`${env.BASE_ENDPOINT}/albums`);
  return data;
};

