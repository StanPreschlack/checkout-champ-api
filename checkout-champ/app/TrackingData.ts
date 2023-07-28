interface Item {
    productId: string;
    name: string;
    qty: string;
    shipping: string;
    price: string;
    refundRemaining: string;
    purchaseStatus: string;
    billingCycleType: string;
    finalBillingCycle: string;
    nextBillDate: string;
}

interface Message {
    orderId: string;
    dateCreated: string;
    name: string;
    items: Item[];
}

export interface TrackingData {
    result: string;
    message: Message;
}
