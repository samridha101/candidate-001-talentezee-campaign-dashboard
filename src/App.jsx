import { useState } from 'react'

function App() {
  const [tickets, setTickets] = useState(3)
  const [winner, setWinner] = useState('Alice')

  const handleBuyCredit = () => {
    alert('Redirecting to Stripe Checkout (simulated).')
  }

  const handleDrawRaffle = () => {
    setWinner('Bob')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-head text-primary mb-6">TalentEzee Campaign Dashboard</h1>

      {/* Campaign Form */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-head mb-4">Create New Campaign</h2>
        <div className="flex gap-2 flex-wrap">
          <input className="border p-2 rounded" placeholder="Campaign Description" />
          <input className="border p-2 rounded" placeholder="Key Performance Indicator" />
          <input type="date" className="border p-2 rounded" />
          <button className="bg-primary text-white px-4 py-2 rounded">Submit Campaign</button>
        </div>
      </section>

      {/* Analytics */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-head mb-4">Campaign Analytics</h2>
        <p>📈 Impressions: 12,456</p>
        <p>👥 Engagements: 4,319</p>
        <p>🎯 Conversions: 532</p>
        <div className="mt-4">
          <p>Credit Accumulation:</p>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div className="bg-accent h-3 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Raffle */}
      <section className="mb-8 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-head mb-4">Raffle Tickets</h2>
        <p>🎫 You have <strong>{tickets}</strong> tickets.</p>
        <div className="mt-2 flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded" onClick={handleBuyCredit}>Buy Extra Credit</button>
          <button className="border border-primary text-primary px-4 py-2 rounded" onClick={handleDrawRaffle}>Draw Raffle Winner</button>
        </div>
        <p className="mt-4">🏆 Winner: <strong>{winner}</strong></p>
      </section>
    </div>
  )
}

export default App
