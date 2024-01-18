const getPage = async (req, res) => {
  const {
    db: { Page }, // this req.db.User property is put here by the addModelsToRequest middleware
    params: { pageid },
  } = req;

  console.log('hiiiii');
  console.log('yo');

  const pages = await Page.getPage(pageid);
  res.send(pages);
};

module.exports = getPage;
