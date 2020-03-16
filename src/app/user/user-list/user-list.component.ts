import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private _user : UserService) { }

  ngOnInit() {
    this.dtOptions.ajax = (dataTablesParameters: any, callback) => {
      that.controllerService.getAdminControllers(this.dtOptions.pageLength, dataTablesParameters.start).subscribe(resp => {
          that.data = resp.data;
          callback({
            recordsTotal: resp.pagination.totalCount,
            recordsFiltered: resp.pagination.totalCount,
            data: []
     
          });
          console.log(that.data);
        });
    };
  }

}
