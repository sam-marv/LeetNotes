import { fetchHandler, getPostOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/users/';

export const getAllPages = async (id) => {
  console.log(`${baseUrl}${id}/pages`)
  const [pages] = await fetchHandler(`${baseUrl}${id}/pages`);
  return pages || [];
};

export const createPage = async ({ title, content, user_id }) => {
  fetchHandler(baseUrl, getPostOptions({ title, content, user_id }));
};
