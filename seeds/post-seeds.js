// const { Post } = require('../models');

// const Sequelize = require('sequelize');

// require('dotenv').config();

// const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize("tinas_tech_blog_db", "root", "Password!1", {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });



// const { Model, DataTypes } = require('sequelize');

// class Post extends Model { }
// // create fields/columns for Post model
// Post.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         body: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'post'
//     }
// );

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        body: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        body: 'https://nasa.gov/donec.json',
        user_id: 1
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        body: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        body: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 1
    }

];

const seedPosts = () => Post.bulkCreate(postdata);

seedPosts();

// module.exports = seedPosts;