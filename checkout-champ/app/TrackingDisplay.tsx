import { Progress } from 'antd';
import { TrackInfo } from './Tracking'; // assuming they are in the same folder

interface TrackingDisplayProps {
  trackInfo: TrackInfo;
}

const TrackingDisplay = ({ trackInfo }: TrackingDisplayProps) => {
  const { progress, estimatedDelivery } = trackInfo;

  return (
    <div>
      <h2>Tracking Information:</h2>
      <div>
        <h3>Tracking ID: {trackInfo.trackingId}</h3>
        <h3>Progress:</h3>
        <Progress percent={progress} status="active" />
        <h3>Estimated Delivery:</h3>
        <p>{estimatedDelivery}</p>
      </div>
    </div>
  );
};

export default TrackingDisplay;
