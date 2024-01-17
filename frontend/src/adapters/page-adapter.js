import { fetchHandler, getPostOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/users/';

export const getAllPages = async (id) => {
  console.log(`${baseUrl}${id}/pages`)
  const [pages] = await fetchHandler(`${baseUrl}${id}/pages`);
  return pages || [];
};

export const savePage = async (pageId, content, userId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/pages`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page_id: pageId, content, user_id : userId }),
    });

    const data = await response.json();
    console.log('Page saved:', data);
  } catch (error) {
    console.error('Error saving page:', error);
  }
};

export const createPage = async ({ title, content, user_id }) => {
  fetchHandler(baseUrl, getPostOptions({ title, content, user_id }));
};
