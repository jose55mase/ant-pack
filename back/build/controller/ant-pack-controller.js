"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const ant_pack_model_1 = __importDefault(require("../models/ant-pack-model"));
var URLALLUSER = 'https://jsonplaceholder.typicode.com/users';
class AntPackController {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            var userEntityList = [];
            const headers = {
                'Content-Type': 'application/json'
            };
            try {
                var response = yield axios.get(URLALLUSER, {
                    headers: headers
                });
                userEntityList = response.data;
                console.log("Ok", userEntityList.length);
            }
            catch (err) {
                console.log("ERROR", err);
            }
            return userEntityList;
        });
    }
    saveAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            ant_pack_model_1.default.saveUserDate();
            res.json({ message: 'Success' });
        });
    }
}
const antPackController = new AntPackController;
exports.default = antPackController;
