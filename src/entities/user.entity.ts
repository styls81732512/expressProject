import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    comment: "名稱",
  })
  name!: string;

  @Column({
    type: "varchar",
    comment: "帳號",
  })
  account!: string;

  @Column({
    type: "varchar",
    comment: "密碼",
  })
  password!: string;

  @Column({
    type: "timestamp",
    comment: "建立時間",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date;

  @Column({
    type: "timestamp",
    comment: "更新時間",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: "timestamp",
    comment: "刪除時間",
    default: null,
  })
  deletedAt!: Date;
}
