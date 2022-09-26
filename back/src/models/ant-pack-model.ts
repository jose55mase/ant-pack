import antPackController from "../controller/ant-pack-controller";
import { Request, Response } from 'express';
import { UserEntity } from "../entity/user-entinty";
import userRepository from "../respository/user-repository";


class AntPackModel {

    public async saveUserDate() {
        var userEntityList: UserEntity[] = [];
        userEntityList = await antPackController.getAllUser();
        userEntityList.forEach((item)=>{
            userRepository.saveUser(item);
        })
    }

}

const antPackModel = new AntPackModel;
export default antPackModel;