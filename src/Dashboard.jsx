// src/Dashboard.jsx
import CampaignForm from './components/CampaignForm';
import AnalyticsWidget from './components/AnalyticsWidget';
import RaffleWidget from './components/RaffleWidget';
import BuyCreditsButton from './components/BuyCreditsButton';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-6 font-roboto">
      <h1 className="text-3xl font-montserrat font-bold mb-4 text-[#00897B]">Campaign Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CampaignForm />
          <BuyCreditButton />
        </div>
        <div>
          <AnalyticsWidget />
          <RaffleWidget />
        </div>
      </div>
    </div>
  );
}
