import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TransactionsService } from '../services/transactions.service'
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Transaction } from '../Models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  transactions: Transaction[]
  transactionDetail:Transaction

  startDate = ""
  endDate = ""
  @ViewChild('modal_1') modal_1: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  backdrop: any

  showDialog(transaction:Transaction) {

    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
    this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
    this.backdrop = document.createElement('DIV')
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop)

    this.transactionDetail = transaction
  }

  closeDialog() {
    this.vc.clear()
    document.body.removeChild(this.backdrop)
  }

  constructor(private transService: TransactionsService, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  ngOnInit(): void {
    this.GetTransactions(this.startDate, this.endDate)

  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.endDate = `${this.toDate.year}-${this.toDate.month}-0${this.toDate.day}`
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.startDate = `${this.fromDate.year}-${this.fromDate.month}-0${this.fromDate.day}`
    }

    if (this.fromDate != null && this.toDate != null) {
      this.GetTransactions(this.startDate, this.endDate)
    }
  }
  GetTransactions(start, end) {
    this.transService.GetTransactions(start, end).subscribe((data) => {
      this.transactions = data.data
    })
  }


  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
