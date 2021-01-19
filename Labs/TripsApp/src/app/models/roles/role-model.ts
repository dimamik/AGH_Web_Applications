export class RoleModel {
  add_trip: boolean = false;
  modify_trip: boolean = false;
  read_archived: boolean = false;
  read_available: boolean = true;
  read_unavailable: boolean = false;
  delete_trip: boolean = false;

  // constructor(add_trip: boolean, modify_trip: boolean, read_archived: boolean, read_available: boolean, read_unavailable: boolean, delete_trip: boolean) {
  //   this.add_trip = add_trip;
  //   this.modify_trip = modify_trip;
  //   this.read_archived = read_archived;
  //   this.read_available = read_available;
  //   this.read_unavailable = read_unavailable;
  //   this.delete_trip = delete_trip;
  // }

}
