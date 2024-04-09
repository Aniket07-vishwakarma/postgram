import axios from "axios";
import env from "../../common/env";

export const fetchCommentsData = async () => {
  const { data } = await axios.get(`${env.BASE_ENDPOINT}/comments`);
  return data;
};
