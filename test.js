const mongoose = require('mongoose');
const Messages = require('./models/messages');
const { faker } = require('@faker-js/faker');

mongoose.connect('mongodb://localhost:27017/chatApp')

const users = ["64db847877237f4b1e09ef4a", "64db78c077237f4b1e09ef42"]

// Generate a random messages 
for (let i = 0; i < 100; i++) {
    const message = new Messages({
        _id: new mongoose.Types.ObjectId(),
        content:  faker.lorem.sentence(),
        sender: users[Math.floor(Math.random() * users.length)],
        date: faker.date.past(),
        roomKey: "test"
    });
    message.save()
        .then(result => {
            console.log(result);
        }
        )
        .catch(err => {
            console.log(err);
        }
        );
}
