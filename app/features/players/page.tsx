"use client";

import React, { useEffect, useState } from 'react';
import PlayerCard from '@components/PlayerCard'; // Adjust the import path as necessary
import playersData from '@public/images/players.json';//../../public/players.json'; // Adjust the import path as necessary

interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  stats: {
    games: number;
    wins?: number;
    losses?: number;
    ERA?: number;
    battingAverage?: number;
    homeRuns?: number;
    RBIs?: number;
  };
  bio: string;
  videoHighlights: string;
}

const PlayersPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(playersData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Fetch player data from an API if needed
    // Example: setPlayers(fetchPlayersFromAPI());
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Players</h1>
      <input 
        type="text" 
        placeholder="Search players..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
