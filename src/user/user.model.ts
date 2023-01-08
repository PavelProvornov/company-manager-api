import { Column, DataType, Model, Table } from "sequelize-typescript";


interface IUserCreationalAttributes {
    email: string,
    password: string
}

@Table({
    tableName: 'users'
})
export class User extends Model <User, IUserCreationalAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @Column({type: DataType.STRING, allowNull: false})
    password_hash: string;
    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    is_verified: boolean;
    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
    is_active: boolean;
}