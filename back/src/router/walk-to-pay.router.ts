import { Router } from 'express'
import  path from 'path'
import walkToPayController from '../controller/walk-to-pay.controller'
import AntPackController from '../controller/ant-pack-controller'
 
 
//import {  } from './templates'
 
class WalkToPay{
    router:Router = Router();
 
    constructor(){
         this.config();
    }
    config():void{

        this.router.get('/antpack/getAllUser',AntPackController.getAllUser)
        this.router.get('/antpack/saveAllUser',AntPackController.saveAllUser)

        this.router.post('/antpack/save',AntPackController.save)
        this.router.patch('/antpack/update',AntPackController.upate)
        this.router.delete('/antpack/delete',AntPackController.delete)
    }
}
 
export default new WalkToPay().router;
//export default walkToPay_Routes.router;
