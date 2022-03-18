const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 7
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 3,
    post_id: 6
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 5,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;