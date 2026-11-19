import {Role} from "./Role";
import {User} from "./User";

export class Manager extends User {
  override role: Role = Role.MANAGER;
}