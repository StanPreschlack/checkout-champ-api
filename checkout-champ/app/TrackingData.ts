type FulfillmentData = {
    company: string,
    orderId: string,
    fulfillmentId: number,
    fulfillmentHouseId: number,
    dateShipped: string | null,
    dateDelivered: string | null,
    dateReturned: string | null,
    dateCreated: string,
    dateUpdated: string,
    dateExported: string | null,
    clientFulfillmentId: string,
    trackingNumber: string | null,
    isReshipment: number,
    shipCarrier: string | null,
    shipMethod: string | null,
    responseText: string | null,
    status: string,
    rmaNumber: string | null,
    campaignId: string,
    customerId: number,
    items: {
        fulfillmentItemId: string,
        name: string,
        sku: string,
        qty: string,
        status: string,
        productId: string,
        rmaNumber: string
    }[]
};

type QueryArgs = {
    page: number,
    sortDir: number,
    resultsPerPage: number,
    sortBy: string,
    orderId: string,
    hideExternal: boolean,
    dateRangeType: string
};

type Message = {
    totalResults: number,
    resultsPerPage: number,
    page: number,
    data: FulfillmentData,
    params: null,
    errors: null,
    sortBy: string,
    sortDir: number,
    queryArgs: QueryArgs
};

export type ResponseData = {
    result: string,
    message: Message
};
