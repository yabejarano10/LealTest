import { __decorate } from "tslib";
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
let TransactionsComponent = class TransactionsComponent {
    constructor(transService, calendar) {
        this.transService = transService;
        this.hoveredDate = null;
        this.toDate = null;
        this.startDate = "";
        this.endDate = "";
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    showDialog(transaction) {
        let view = this.modal_1.createEmbeddedView(null);
        this.vc.insert(view);
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
        this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open');
        this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
        this.backdrop = document.createElement('DIV');
        this.backdrop.className = 'modal-backdrop';
        document.body.appendChild(this.backdrop);
        this.transactionDetail = transaction;
    }
    closeDialog() {
        this.vc.clear();
        document.body.removeChild(this.backdrop);
    }
    ngOnInit() {
        this.GetTransactions(this.startDate, this.endDate);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.endDate = `${this.toDate.year}-${this.toDate.month}-0${this.toDate.day}`;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
            this.startDate = `${this.fromDate.year}-${this.fromDate.month}-0${this.fromDate.day}`;
        }
        if (this.fromDate != null && this.toDate != null) {
            this.GetTransactions(this.startDate, this.endDate);
        }
    }
    GetTransactions(start, end) {
        this.transService.GetTransactions(start, end).subscribe((data) => {
            this.transactions = data.data;
        });
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
};
__decorate([
    ViewChild('modal_1')
], TransactionsComponent.prototype, "modal_1", void 0);
__decorate([
    ViewChild('vc', { read: ViewContainerRef })
], TransactionsComponent.prototype, "vc", void 0);
TransactionsComponent = __decorate([
    Component({
        selector: 'app-transactions',
        templateUrl: './transactions.component.html',
        styleUrls: ['./transactions.component.css']
    })
], TransactionsComponent);
export { TransactionsComponent };
//# sourceMappingURL=transactions.component.js.map