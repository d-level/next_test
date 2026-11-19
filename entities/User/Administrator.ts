import {Role} from "./Role";
import {User} from "./User";

export class Administrator extends User {
  override role: Role = Role.ADMINISTRATOR;
}