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
const ant_pack_controller_1 = __importDefault(require("../controller/ant-pack-controller"));
const user_repository_1 = __importDefault(require("../respository/user-repository"));
class AntPackModel {
    saveUserDate() {
        return __awaiter(this, void 0, void 0, function* () {
            var userEntityList = [];
            userEntityList = yield ant_pack_controller_1.default.getAllUser();
            userEntityList.forEach((item) => {
                user_repository_1.default.saveUser(item);
            });
        });
    }
}
const antPackModel = new AntPackModel;
exports.default = antPackModel;
