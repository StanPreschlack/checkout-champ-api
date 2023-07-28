"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { TrackingData } from "./TrackingData";
import 'bootstrap/dist/css/bootstrap.css'

export const Tracking = (trackingData:TrackingData) => {

  return trackingData ? (
    <div className="col-md-8 col-12 p-0">
                    <div className="order-number text-uppercase border-bottom px-4 py-3">
                        Order <span id="orderId">#A9C575EE43</span>
                    </div>
                    <div className="order-date px-4 py-3">
                        <p className="bold-font">Estimated Delivery</p>
                        <h2 id="orderDate" className="mb-0 bold-font">Fri, Aug 4</h2>
                    </div>
                    <div className="order-step px-4">
                        <div className="progress-container">
                            <div className="progress" id="progress"></div>
                            <div className="circle active step1">
                                <div className="text-center">
                                    <p className="small bold-font mb-0">Ordered</p>
                                    <p id="orderedDate" className="small mb-0">Fri, Jul 21</p>
                                </div>
                            </div>
                            <div className="circle active step2">
                                <div className="text-center">
                                    <p className="small bold-font mb-0">Pre Shipment</p>
                                    <p id="transitDate" className="small mb-0">Sat, Jul 22</p>
                                </div>
                            </div>
                            <div className="circle active step3">
                                <div className="text-center">
                                    <p className="small bold-font mb-0">In Transit</p>
                                    <p id="outForDeliveryDate" className="small mb-0">Fri, Jul 28</p>
                                </div>
                            </div>
                            <div className="circle  step4">
                                <div className="text-center">
                                    <p className="small bold-font mb-0">
                                                                                    Estimated Delivery
                                                                            </p>
                                    <p id="estimatedDeliveryDate" className="small mb-0">
                                                                                    Fri, Aug 4                                                                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-notification px-4 my-3">
                        <div className="d-flex px-4 py-2 align-items-center gap-3 bg-light-blue">
                            <img src="https://shipexpressonline.com/images/icon-info.png"/>
                            <p className="mb-0">
                                                                Our fulfillment has informed us that items in this shipment are in progress. Please note: It is normal for on-time packages to go a few days without being scanned.
                                                            </p>
                        </div>
                    </div>
                    <div className="tracking-udates px-4 my-3">
                        <div className="tab-title py-3 active">Hide Tracking Updates</div>
                        <div className="tab-content">
                            <div className="p-4 bg-light-grey mb-2 d-flex align-items-center">
                                <div className="pe-3 col-9">
                                    <h6 className="bold-font">Have Any Questions?</h6>
                                    <p className="mb-0 small">We have fulfillment partners all across the world, so please understand we are doing everything we can to ensure your package gets delivered promptly and accurately! If you have any questions at all, please contact us!</p>
                                </div>
                                <div className="ps-3 col-3">
                                    <a href="tel:+1 213-816-7409" className="btn bg-yellow bold-font color-black">Call Customer Support</a>
                                </div>
                            </div>
                            <div className="trackings">
                                                                                                                                <div className="mb-2 d-flex tracking">
                                    <div className="tracking-date-wrap p-3">
                                        <p className="small mb-0 tracking-date">28/07/2023</p>
                                        <p className="small mb-0 tracking-time">09:54</p>
                                    </div>
                                    <div className="tracking-content-wrap p-3 bg-light-grey d-flex justify-content-between">
                                        <div>
                                            <h6 className="bold-font">Departed from Facility</h6>
                                            <p className="small mb-0">Hodgkins. IL</p>
                                        </div>
                                        <div>
                                            <p className="small mb-0">In Transit</p>
                                        </div>
                                    </div>
                                </div>
                                                                                                <div className="mb-2 d-flex tracking">
                                    <div className="tracking-date-wrap p-3">
                                        <p className="small mb-0 tracking-date">22/07/2023</p>
                                        <p className="small mb-0 tracking-time">11:48</p>
                                    </div>
                                    <div className="tracking-content-wrap p-3 bg-light-grey d-flex justify-content-between">
                                        <div>
                                            <h6 className="bold-font">Arrived at Facility</h6>
                                            <p className="small mb-0">Hodgkins. IL</p>
                                        </div>
                                        <div>
                                            <p className="small mb-0">Pre Shipment</p>
                                        </div>
                                    </div>
                                </div>
                                                                <div className="mb-2 d-flex tracking">
                                    <div className="tracking-date-wrap p-3">
                                        <p className="small mb-0 tracking-date">21/07/2023</p>
                                        <p className="small mb-0 tracking-time">13:39</p>
                                    </div>
                                    <div className="tracking-content-wrap p-3 bg-light-grey d-flex justify-content-between">
                                        <div className="d-flex gap-3 align-items-center">
                                            <img src="https://shipexpressonline.com/images/icon-order-placed.png" alt=""/>
                                            <h6 className="bold-font mb-0">Order Placed</h6>
                                        </div>
                                        <div>
                                            <p className="small mb-0">Ordered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator px-4"></div>
                    <div className="order-items px-4">
                        <div className="order-items-title mb-3">
                            <h6>Items in this Shipment:</h6>
                        </div>
                                                        
                        <div className="order-item mb-1 p-3 bg-light-blue d-flex align-items-center">
                            <div className="order-item-image image-wrap">
                                <img src="https://cdn.shopify.com/s/files/1/0640/1425/4318/products/L1920031.png" alt="" />
                            </div>
                            <div className="order-item-detail ps-4">
                                <h6 className="item-title bold-font">Army Gunner Shorts</h6>
                                <p className="item-qty mb-0">Quantity: 1</p>

                            </div>
                        </div>
                                            </div>
                    <div className="separator px-4"></div>
                    <div className="d-flex px-4 justify-content-between mb-5">
                        <div className="col-6 bg-grey p-4" >
                            <p className="mb-0">Ship Express Online works with a global network of fulfillment partners and shipping carriers to get your items shipped.</p>
                        </div>
                        <div className="col-6 bg-light-green p-4" >
                            <p className="mb-0">If you have questions about your order, please contact customer service at <a href="tel:+1 213-816-7409" className="color-black bold-font">+1 213-816-7409</a>.
                            </p>
                        </div>
                    </div>
                </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Tracking;
