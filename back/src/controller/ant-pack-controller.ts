
const axios = require('axios')
import { Request, Response } from 'express';
import { UserEntity } from '../entity/user-entinty';
import antPackModel from '../models/ant-pack-model';

var URLALLUSER = 'https://jsonplaceholder.typicode.com/users'

class AntPackController {

    public async getAllUser() {
        var userEntityList: UserEntity[] = [];
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            var response = await axios.get(URLALLUSER, {
                headers: headers
            })
            userEntityList = response.data;
            console.log("Ok", userEntityList.length);
        } catch (err) {
            console.log("ERROR", err)
        }
        return userEntityList;
    }

    public async saveAllUser(req: Request, res: Response) {
        antPackModel.saveUserDate();
        res.json({ message: 'Success'});
    }
}

const antPackController = new AntPackController;
export default antPackController;