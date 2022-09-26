"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ant_pack_controller_1 = __importDefault(require("../controller/ant-pack-controller"));
//import {  } from './templates'
class WalkToPay {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/antpack/getAllUser', ant_pack_controller_1.default.getAllUser);
        this.router.get('/antpack/saveAllUser', ant_pack_controller_1.default.saveAllUser);
        this.router.post('/antpack/save', ant_pack_controller_1.default.save);
        this.router.patch('/antpack/update', ant_pack_controller_1.default.upate);
        this.router.delete('/antpack/delete', ant_pack_controller_1.default.delete);
    }
}
exports.default = new WalkToPay().router;
//export default walkToPay_Routes.router;
