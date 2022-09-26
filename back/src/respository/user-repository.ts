import * as sql from 'mssql';
import pool from '../database'
import { UserEntity } from '../entity/user-entinty';

class UserRepository {
    
    public async saveUser(userEntity : UserEntity): Promise<any>{
        var componyId : number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        var addressId : number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
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
        
        var geoId : number = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
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
            if (!pool.connected)
                await pool.connect();
    
            var req = await pool.request();
            //var result = await req.query(query); 
     
            await pool.close();
            
            //return singleReturn ? result.recordset[0] : result.recordset;
        } catch (error) {
            throw error
        } finally {
            if (pool.connected)
                await pool.close()
            
        }
        
    }

}

const userRepository = new UserRepository;
export default userRepository;
