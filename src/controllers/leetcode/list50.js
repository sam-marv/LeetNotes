const list50 = async (req, res) => {
    const {
      db: { Leetcode }, // this req.db.User property is put here by the addModelsToRequest middleware    THANK GOD THIS COMMENT WAS HERE
      body: {offset}
    } = req;
  
    console.log('hiiiii');
    console.log('yo');
  
    const leetcodes = await Leetcode.get50(offset);
    res.send(leetcodes);
  };
  
  module.exports = list50;