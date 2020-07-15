export interface PurchaseOrderModel {
  PurchaseOrder_ID: String;
  PurchaseOrder_Date: Date
  PurchaseOrder_SupplierName: String;
  PurchaseOrder_ItemName: String;
  PurchaseOrder_ItemQuantity: Number;
  PurchaseOrder_ItemCost: Number;
  PurchaseOrder_ItemDescription: Text;
  PurchaseOrder_POClient: String;
  PurchaseOrder_NameOfItemReceiver: String;
  PurchaseOrder_POStatus: String;
  PurchaseOrder_DateOfItemReceived: Date;
  PurchaseOrder_Remarks: String;
}