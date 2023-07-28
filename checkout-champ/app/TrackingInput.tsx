"use client"
import { useState } from 'react';
import { TrackingData } from "./TrackingData";
import {Tracking} from "./Tracking";

const TrackingComponent = () => {
    const [trackingId, setTrackingId] = useState('');
    const [data, setData] = useState<TrackingData | null>(null);

    const trackPackage = async () => {
        const response = await fetch('https://api.checkoutchamp.com/v1/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR KEY HERE',
            },
            body: JSON.stringify({ trackingId }),
        });

        const data = await response.json();
        setData(data);
    };

    return (
        <div>
            <input 
                type="text" 
                value={trackingId} 
                onChange={e => setTrackingId(e.target.value)} 
                placeholder="Enter tracking ID"
            />
            <button onClick={trackPackage}>Track</button>

            {data && (
                <div>
                    {/* lol */}
                    {/* @ts-ignore */}
                    <Tracking trackingData={data} />
                </div>
            )}
        </div>
    );
};

export default TrackingComponent;
