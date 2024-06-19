import {insertUser } from './db';
import { NewUser } from './schema';

const main = async () => {
    const newUser: Omit<NewUser, 'id'> = {
        name: 'test',
        email: 'test@gmail.com',
        password: 'password'
    };
    const res = await insertUser(newUser);
    console.log("Successfully inserted user", res);
    process.exit();
};
