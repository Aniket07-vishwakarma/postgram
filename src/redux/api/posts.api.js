import axios from "axios";
import env from "../../common/env";

export const fetchPostsData = async () => {
  const { data } = await axios.get(`${env.BASE_ENDPOINT}/posts`);
  return data;
};

export const createNewPost = async ({ userId, title, body }) => {
  const postBody = {
    url: `${env.BASE_ENDPOINT}/posts`,
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return await axios(postBody);
};
