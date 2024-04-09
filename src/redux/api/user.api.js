import axios from "axios";
import env from "../../common/env";

export const fetchUsersData = async () => {
  const { data } = await axios.get(`${env.BASE_ENDPOINT}/users`);
  return data;
};

