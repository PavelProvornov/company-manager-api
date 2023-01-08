import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface IUserCreationalAttributes {
  email: string;
  passwordHash: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, IUserCreationalAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING, allowNull: false })
  passwordHash: string;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isVerified: boolean;
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  isActive: boolean;
}
