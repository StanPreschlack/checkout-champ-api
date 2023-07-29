import Image from 'next/image'
import styles from './page.module.css'
import TrackingInput from './TrackingInput'
import Tracking from "./Tracking"
import {OrderDelayed} from "./OrderDelayed"

let time = Date.now() / 1000 / 60 / 60 / 24 / 7 // unix time in weeks, switch odd / even

export default function Home() {

    if (time % 2 == 0) {
        return (
            <div>
              {/* accept input */}
              {/* <TrackingInput /> */}
                <OrderDelayed />
            </div>
            )
    } else {
        return (
        <div>
          {/* accept input */}
          {/* <TrackingInput /> */}
        
             {/* @ts-ignore */}
          <Tracking trackingData={{
          "result": "SUCCESS",
          "message": {
              "totalResults": 3,
              "resultsPerPage": 25,
              "page": 1,
              "data": [
                  {
                      "company": "fultest1",
                      "orderId": "D0BAD0EC6D",
                      "fulfillmentId": 790,
                      "fulfillmentHouseId": 17,
                      "dateShipped": null,
                      "dateDelivered": null,
                      "dateReturned": null,
                      "dateCreated": "2022-01-03 13:08:25",
                      "dateUpdated": "2022-01-03 13:08:25",
                      "dateExported": null,
                      "clientFulfillmentId": "F19A51D28A",
                      "trackingNumber": null,
                      "isReshipment": 0,
                      "shipCarrier": null,
                      "shipMethod": null,
                      "responseText": null,
                      "status": "HOLD",
                      "rmaNumber": null,
                      "campaignId": "4",
                      "customerId": 4990,
                      "items": [
                          {
                              "fulfillmentItemId": "927",
                              "name": "testrpor",
                              "sku": "RSDSC",
                              "qty": "1",
                              "status": "HOLD",
                              "productId": "4",
                              "rmaNumber": ""
                          }
                      ]
                  },
                  {
                      "company": "fultest1",
                      "orderId": "D0BAD0EC6D",
                      "fulfillmentId": 791,
                      "fulfillmentHouseId": 17,
                      "dateShipped": null,
                      "dateDelivered": null,
                      "dateReturned": null,
                      "dateCreated": "2022-01-03 13:09:25",
                      "dateUpdated": "2022-01-03 13:09:25",
                      "dateExported": null,
                      "clientFulfillmentId": "2E784F7979",
                      "trackingNumber": null,
                      "isReshipment": 0,
                      "shipCarrier": "Default",
                      "shipMethod": "Default",
                      "responseText": null,
                      "status": "HOLD",
                      "rmaNumber": null,
                      "campaignId": "4",
                      "customerId": 4991,
                      "items": [
                          {
                              "fulfillmentItemId": "928",
                              "name": "testrpor",
                              "sku": "RSDSC",
                              "qty": "1",
                              "status": "HOLD",
                              "productId": "4",
                              "rmaNumber": ""
                          }
                      ]
                  },
                  {
                      "company": "fultest1",
                      "orderId": "D0BAD0EC6D",
                      "fulfillmentId": 792,
                      "fulfillmentHouseId": 17,
                      "dateShipped": null,
                      "dateDelivered": null,
                      "dateReturned": null,
                      "dateCreated": "2022-01-03 13:09:28",
                      "dateUpdated": "2022-01-03 13:09:28",
                      "dateExported": null,
                      "clientFulfillmentId": "5057041821",
                      "trackingNumber": null,
                      "isReshipment": 0,
                      "shipCarrier": "Default",
                      "shipMethod": "Default",
                      "responseText": null,
                      "status": "HOLD",
                      "rmaNumber": null,
                      "campaignId": "4",
                      "customerId": 4991,
                      "items": [
                          {
                              "fulfillmentItemId": "929",
                              "name": "testrpor",
                              "sku": "RSDSC",
                              "qty": "1",
                              "status": "HOLD",
                              "productId": "4",
                              "rmaNumber": ""
                          }
                      ]
                  }
              ],
              "params": null,
              "errors": null,
              "sortBy": "dateCreated",
              "sortDir": 1,
              "queryArgs": {
                  "page": 1,
                  "sortDir": 1,
                  "resultsPerPage": 25,
                  "sortBy": "dateCreated",
                  "orderId": "D0BAD0EC6D",
                  "hideExternal": true,
                  "dateRangeType": "dateCreated"
              }
          }
      }}/>
        </div>
        )
}

}
