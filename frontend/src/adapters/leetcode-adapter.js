import { fetchHandler, getPostOptions, basicFetchOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/leetcodes';

export const getLeetcodes = async (obj) => {
    console.log(obj.offset)
    let url = `/api/leetcodes?offset=${obj.offset}`
    if(obj.difficulty !== null) url += `&difficulty=${obj.difficulty}`
    if(obj.tag !== null) url += `&tag=${obj.tag}`
  const [leetcodes] = await fetchHandler(url);
  console.log(leetcodes)
  return leetcodes || [];
};

export const createPage = async ({ title, content, user_id }) => {
  fetchHandler(baseUrl, getPostOptions({ title, content, user_id }));
};