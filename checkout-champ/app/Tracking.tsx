"use client"
import { useState } from 'react';

export interface TrackInfo {
    trackingId: string;
    progress: number;
    estimatedDelivery: string;
}

const Tracking = () => {
    const [trackingId, setTrackingId] = useState('');
    const [trackInfo, setTrackInfo] = useState<TrackInfo | null>(null);

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
        setTrackInfo(data);
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

            {trackInfo && (
                <div>
                    <h2>Tracking Info:</h2>
                    <pre>{JSON.stringify(trackInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Tracking;
