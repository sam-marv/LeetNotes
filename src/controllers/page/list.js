const listPages = async (req, res) => {
  const {
    db: { Page }, // this req.db.User property is put here by the addModelsToRequest middleware
    params : {id}
  } = req;

  console.log('hiiiii');
  console.log('yo');

  const pages = await Page.list(id);
  res.send(pages);
};

module.exports = listPages;
