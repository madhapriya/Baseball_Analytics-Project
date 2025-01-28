import React from 'react';

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

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => {
  const handleFollow = () => {
    console.log(`Followed player: ${player.name}`);
  };

  const handleHighlights = () => {
    console.log(`Viewing highlights for player: ${player.name}`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Team: {player.team}</p>
      <h3>Stats:</h3>
      <p>Games: {player.stats.games}</p>
      {player.stats.wins !== undefined && <p>Wins: {player.stats.wins}</p>}
      {player.stats.losses !== undefined && <p>Losses: {player.stats.losses}</p>}
      {player.stats.ERA !== undefined && <p>ERA: {player.stats.ERA}</p>}
      {player.stats.battingAverage !== undefined && <p>Batting Average: {player.stats.battingAverage}</p>}
      {player.stats.homeRuns !== undefined && <p>Home Runs: {player.stats.homeRuns}</p>}
      {player.stats.RBIs !== undefined && <p>RBIs: {player.stats.RBIs}</p>}
      <h3>Bio:</h3>
      <p>{player.bio}</p>
      <h3>Highlights:</h3>
      <video width="320" height="240" controls>
        <source src={player.videoHighlights} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleFollow}>Follow</button>
        <button onClick={handleHighlights}>Highlights</button>
      </div>
    </div>
  );
};

export default PlayerCard;
