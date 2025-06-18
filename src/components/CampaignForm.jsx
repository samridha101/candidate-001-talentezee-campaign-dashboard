import React, { useState } from 'react';

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    description: '',
    kpi: '',
    deadline: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fakeCampaignId = Date.now();

    // Simulate enrollCampaign API call
    fetch('/api/enrollCampaign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        campaignId: fakeCampaignId,
        platform: 'TalentEzee',
      }),
    });

    setSuccess(true);
    setFormData({ description: '', kpi: '', deadline: '' });
  };

  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-[#00897B]">Create New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="description"
          placeholder="Campaign Description"
          className="w-full p-2 border border-gray-200 rounded"
          onChange={handleChange}
          value={formData.description}
          required
        />
        <input
          type="text"
          name="kpi"
          placeholder="Key Performance Indicator"
          className="w-full p-2 border border-gray-200 rounded"
          onChange={handleChange}
          value={formData.kpi}
          required
        />
        <input
          type="date"
          name="deadline"
          className="w-full p-2 border border-gray-200 rounded"
          onChange={handleChange}
          value={formData.deadline}
          required
        />
        <button
          type="submit"
          className="bg-[#00897B] text-white px-4 py-2 rounded hover:bg-[#00796B]"
        >
          Submit Campaign
        </button>
        {success && (
          <p className="text-green-600 font-medium mt-2">Campaign created & auto-enrolled!</p>
        )}
      </form>
    </div>
  );
}
