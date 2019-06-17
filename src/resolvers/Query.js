const { forwardTo } = require('prisma-binding');
// If the query is exactly the same in Yoga as it is in Prisma, just forward the query to Prisma using forwardTo. 
const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items!!');
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
