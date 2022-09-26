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
const database_1 = __importDefault(require("../database"));
class UserRepository {
    saveUser(userEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            var componyId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            var addressId = Math.floor(Math.random() * (100 - 1 + 1) + 1);
            const userQuery = `INSERT INTO antpack."user"
        (id, name, username, email, address, phone, webside, companyId)
        VALUES (
          '${userEntity.id}',
          '${userEntity.name}',
          '${userEntity.username}',
          '${userEntity.email}',
          ${addressId},
          '${userEntity.phone}',
          '${userEntity.webside}',
          ${componyId},
          );`;
            var geoId = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
            const addressQuery = `INSERT INTO antpack.address
        (id, street, suite, city, zipcode, geoId)    
        VALUES (
          ${addressId},
          '${userEntity.address.street}',
          '${userEntity.address.suite}',
          '${userEntity.address.city}',
          '${userEntity.address.zipcode}',
          ${geoId},
          );`;
            const geoQuery = `INSERT INTO antpack.geo
        (lat, lng, id)
        VALUES (          
          '${userEntity.address.geo.lat}',
          '${userEntity.address.geo.lng}',
          ${geoId}
          );`;
            const companyQuery = `INSERT INTO antpack.company
        (id, catchPhrase, bs, name)
        VALUES (          
          ${componyId},
          '${userEntity.company.catchPhrase}',
          '${userEntity.company.bs}',
          '${userEntity.company.name}',
          );`;
            try {
                if (!database_1.default.connected)
                    yield database_1.default.connect();
                var req = yield database_1.default.request();
                //var result = await req.query(query); 
                yield database_1.default.close();
                //return singleReturn ? result.recordset[0] : result.recordset;
            }
            catch (error) {
                throw error;
            }
            finally {
                if (database_1.default.connected)
                    yield database_1.default.close();
            }
        });
    }
}
const userRepository = new UserRepository;
exports.default = userRepository;
