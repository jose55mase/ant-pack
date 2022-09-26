"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const nodemailer = __importStar(require("nodemailer"));
const templateEmail_1 = __importDefault(require("./templateEmail"));
class SendEmail {
    transport() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    sendMail(req, responseEstatusTransactionPSE) {
        return __awaiter(this, void 0, void 0, function* () {
            let addressNoticationTrans = ['yulies1990@gmail.com', 'gloria.castaneda@kiero.co',
                'gustavo.baez@kiero.co', 'jose.mz@kiero.co', 'jose.marin@kiero.co', 'diana.gutierrez@kiero.co'];
            //addressNoticationTrans.push(req.data.email)
            const transport = yield nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'yuli.espitia2@kiero.co',
                    pass: 'Clavesegura2017'
                }
            });
            const mailOptions = {
                from: 'yuli.espitia2@kiero.co',
                to: JSON.stringify(addressNoticationTrans),
                subject: 'Kiero | Vendiste un producto!',
                html: templateEmail_1.default.sendEmail(req, responseEstatusTransactionPSE)
            };
            const result = yield transport.sendMail(mailOptions);
            return result;
        });
    }
}
const sendEmail = new SendEmail();
exports.default = sendEmail;
