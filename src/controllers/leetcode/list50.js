const list50 = async (req, res) => {
    const {
      db: { Leetcode }, // this req.db.User property is put here by the addModelsToRequest middleware    THANK GOD THIS COMMENT WAS HERE
      query: { offset, difficulty, tag}
    } = req;
  
    console.log('hiiiii');
    console.log('yo');
  
    const leetcodes = await Leetcode.get50(offset, difficulty, tag);
    res.send(leetcodes);
  };
  
  module.exports = list50;

  //