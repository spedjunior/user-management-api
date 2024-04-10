import { User } from "@/entities/User";
import { IUsersRepository } from "../IUsersRepository";
import mysql, { Pool } from 'mysql';
import dbConfig from "../../repositories/config/dbConfig";


export class MysqlUserRepository implements IUsersRepository {
    private pool: Pool;

    constructor() {
        this.pool = mysql.createPool(dbConfig);
    }

    async save(user: User): Promise<void> {
        console.log(user)
        return new Promise<void>((resolve, reject) => {
            this.pool.query('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', [user.id, user.name, user.email, user.password], (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
    async findByEmail(email: string): Promise<User | undefined> {
           return new Promise<User | undefined>((resolve, reject) => {
            this.pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        console.log(results)
                        const userData = results[0];
                        resolve({
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            password: userData.password
                        });
                    } else {
                        resolve(undefined);
                    }
                }
            });
        });
    }

    async findById(id: string): Promise<User | undefined> {
        return new Promise<User | undefined>((resolve, reject) => {
            this.pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        const userData = results[0];
                        console.log(results)
                        resolve({
                            id: userData.id,
                            name: userData.name,
                            email: userData.email,
                            password: userData.password
                        });
                    } else {
                        resolve(undefined);
                    }
                }
            });
        });
    }

    async deleteUserByEmail(email: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.pool.query('DELETE FROM users WHERE email = ?', [email], (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}

