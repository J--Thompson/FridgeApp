if (Posts.find().count() === 0) {
  Posts.insert({
    //kind: 'Insert kind',
    amount: 0 ,
    product: 'insert a product'
  });
}