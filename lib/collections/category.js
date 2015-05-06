Category = new Mongo.Collection('category');
Category.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, category) { 
  	return ownsDocument(userId, category); 
  },
  remove: function(userId, category) { return ownsDocument(userId, category); }
});

Category.deny({
  update: function(userId, category, fieldNames) {
    // may only edit the following field:
    return (_.without(fieldNames, 'category').length > 0);
  }
});

