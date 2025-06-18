import React, { useState } from 'react';

export default function RaffleWidget() {
  const [tickets, setTickets] = useState(3);
  const [winner, setWinner] = useState(null);

  const handleBuyCredit = () => {
    alert('Redirecting to Stripe Checkout (simulate)');
  };

  const drawWinner = () => {
    const names = ['Alice', 'Bob', 'Carlos', 'Dana'];
    const rand = names[Math.floor(Math.random() * names.length)];
    setWinner(rand);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-3 text-[#00897B]">Raffle Tickets</h2>
      <p>🎫 You have <strong>{tickets}</strong> tickets.</p>
      <div className="flex items-center gap-3 mt-3">
        <button
          className="bg-[#CDDC39] px-4 py-2 rounded text-sm hover:bg-[#C0D72E]"
          onClick={handleBuyCredit}
        >
          Buy Extra Credit
        </button>
        <button
          className="border border-[#00897B] text-[#00897B] px-4 py-2 rounded text-sm hover:bg-[#E0F2F1]"
          onClick={drawWinner}
        >
          Draw Raffle Winner
        </button>
      </div>
      {winner && (
        <p className="mt-3 text-green-600">🏆 Winner: {winner}</p>
      )}
    </div>
  );
}
