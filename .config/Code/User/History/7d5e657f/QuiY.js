const { Post } = require(../models);

const postData = [
{ 
  id: '',
  title: 'Post 1',
  author: 'User 1',
  date: '',
  content: 'This is the first post',
},
{ 
    id: '',
    title: 'Post 2',
    author: 'User 2',
    date: '',
    content: 'This is the second post',
  },
{
    id: '',
    title: 'Post 3',
    author: 'User 3',
    date: '',
    content: 'This is the third post',
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;