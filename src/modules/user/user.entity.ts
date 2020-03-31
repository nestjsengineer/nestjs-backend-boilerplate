import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Expose } from 'class-transformer';
import { Task } from '../task/task.entity';

@Entity({ name: 'user' })
@Unique(['username'])
export class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({nullable: true})
  firstName: string;

  @Column({nullable: true})
  lastName: string;

  @Column({ nullable: false })
  password: string;
  
  @Column()
  salt: string;

  @Column({default: '', nullable: true})
  phone?: string;

  @OneToMany(type => Task, task => task.user, { eager: true })
  tasks: Task[];
  
  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}
