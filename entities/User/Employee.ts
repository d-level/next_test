import {Manager} from "./Manager";
import {Role} from "./Role";
import {User} from "./User";

export class Employee extends User {
  override role: Role = Role.EMPLOYEE;
  manager!: Manager;
}