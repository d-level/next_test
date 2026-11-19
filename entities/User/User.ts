import {Role} from "./Role";
import {Service} from "./Service";

export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  role!: Role;
  service!: Service;
}