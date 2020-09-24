import { TestBed } from '@angular/core/testing';
import { TransactionsService } from './transactions.service';
describe('TransactionsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TransactionsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=transactions.service.spec.js.map