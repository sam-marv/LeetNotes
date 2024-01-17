import { fetchHandler, getPostOptions, basicFetchOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/leetcodes';

export const getAllPages = async (offset) => {
//     const appPageOptions =
//   const [leetcodes] = await fetchHandler(baseUrl, );
  return leetcodes || [];
};

export const createPage = async ({ title, content, user_id }) => {
  fetchHandler(baseUrl, getPostOptions({ title, content, user_id }));
};