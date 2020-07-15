import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  
  constructor( private http: HttpClient ) { }

  // PURCHASE ORDER FORMGROUP
  PurchaseOrderForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    // Pattern: IT-<four 0-9 numbers>-<two 0-9 numbers>-<at least one 0-9 number>
    po_id: new FormControl('', [Validators.required, Validators.pattern('IT-([0-9]{4})-([0-9]{2})-([0-9]+)')]),
    po_date: new FormControl('', Validators.required),
    po_s_name: new FormControl('', Validators.required),
    po_i_desc: new FormControl(''),
    po_t: new FormControl(''), 
    po_client: new FormControl('', Validators.required),
    po_rcvr: new FormControl('', Validators.required),
    po_stat: new FormControl('', Validators.required),
    po_d_rcvd: new FormControl(''),
    po_remarks: new FormControl(''),
    __v: new FormControl(null)
  });

  PurchaseOrderAddItemForm: FormGroup = new FormGroup({
    po_i_name: new FormControl('', Validators.required),
    // Pattern: any qty of 0-9 number
    po_i_count: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    // Pattern: any qty of 0-9 number
    po_i_cost: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    po_ut: new FormControl(''),
  });

  // Setting PurchaseOrderForm to its initial value
  initialize() {
    this.PurchaseOrderForm.setValue({
      _id: null,
      po_id: 
        this.getLatestPOEntry().subscribe(result => {
          this.PurchaseOrderForm.get('po_id').setValue(result);
        }),
      po_date: new Date,
      po_s_name: null,
      po_i_desc: null,
      po_t: null,
      po_client: null,
      po_rcvr: null,
      po_stat: null,
      po_d_rcvd: null,
      po_remarks: null,
      __v: null
    });
  }

  initializeNewItem() {
    this.PurchaseOrderForm.setValue({
      po_i_name: null,
      po_i_count: null,
      po_i_cost: null,
      po_ut: null
    });
  }

  // FILLING OUT EACH TEXTBOX WITH DATA
  populate(po_row){
    this.PurchaseOrderForm.setValue(po_row);
    
    if (po_row.po_date) {
      this.PurchaseOrderForm.get('po_date').setValue(new Date(this.PurchaseOrderForm.get('po_date').value.toString().slice(0, -1)));
    }

    if (po_row.po_d_rcvd) {
      this.PurchaseOrderForm.get('po_d_rcvd').setValue(new Date(this.PurchaseOrderForm.get('po_d_rcvd').value.toString().slice(0, -1)));
    }
  }

  // Create
  addNewPurchaseOrderRecord(pos) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.post('/pos/add/new', pos, {headers: headers});
  }

  // Read
  getAllPurchaseOrderRecords() {
    return this.http.get('/pos/rd/all');
  }

  getLatestPOEntry() {
    return this.http.get('/pos/rd/id');
  }

  //Update
  editPurchaseOrderRecord(pos) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.put('/pos/upd/'+pos._id, pos, {headers: headers});
  }
  
  // Delete
  deletePurchaseOrderRecord(id) {
    return this.http.delete('/pos/del/'+id);
  }
}
