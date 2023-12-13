const sequelize = require(".config/connections")
const Posts = require("./models/Posts");

const postSeedData = require("./post_seed.json")

const seedDatabase = async () => {
    await sequelize.sync({ force: true})

    const post = await Posts.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true
    })
process.exit(0)

}

seedDatabase();