import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { ListService } from '../../list.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account: any[];
  title1 = 'Account';
  title2 = 'Available Cash';
  title3 = 'Today\'s Change';
  isDesc: boolean = false;
  column: string = 'CategoryName';
  records: Account;
  accountToShow = 3;
  buttonDesc = 'Load More';
  chosenColumn: string;
  idSort: string;
  cashSort: string;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList()
            .subscribe((accounts: Account[]) => this.account = accounts);

  }
  sort(property: string) {
  this.isDesc = !this.isDesc; //change the direction
  this.column = property;
  let direction = this.isDesc ? 1 : -1;
  if(property === 'id'){
    this.cashSort='';
    if(this.idSort === ''){
      this.idSort = '^';
      } else {
        if(this.idSort === '^'){
          this.idSort = 'v';
         } else{
           this.idSort = '^';
         }

      }
        
  }else{
    this.idSort = '';
    if(this.cashSort === ''){
      this.cashSort = '^';
      } else {
        if(this.cashSort === '^'){
          this.cashSort = 'v';
         } else{
           this.cashSort = '^';
         }

      }
    

  }

    this.account.sort(function (a, b) {

      if (a[property] < b[property]) {
        
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };
  toggle(){
    if (this.accountToShow == 3) {
      this.accountToShow = this.account.length;
      this.buttonDesc = 'Show Less';
    } else {
      this.accountToShow = 3;
      this.buttonDesc = 'Load More';
    }
  }
}
