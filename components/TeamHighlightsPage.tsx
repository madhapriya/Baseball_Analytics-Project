"use client";
import React from 'react';

type TeamHighlightsPageProps = {
  teamId: string;
};

// Dummy data for highlights
const teams = [
  {
    id: 1, name: 'Team A', logo: '/logos/logo1.png', highlights: [
      { id: 1, title: 'Highlight 1', duration: '3:25', date: '25 de enero de 2025', thumbnail: '/thumbnails/thumb1.png' },
      { id: 2, title: 'Highlight 2', duration: '1:22', date: '25 de enero de 2025', thumbnail: '/thumbnails/thumb2.png' }
    ]
  },
  {
    id: 2, name: 'Team B', logo: '/logos/logo2.png', highlights: [
      { id: 1, title: 'Highlight 3', duration: '2:06', date: '25 de enero de 2025', thumbnail: '/thumbnails/thumb3.png' },
      { id: 2, title: 'Highlight 4', duration: '0:53', date: '25 de enero de 2025', thumbnail: '/thumbnails/thumb4.png' }
    ]
  }
];

const TeamHighlightsPage = ({ teamId }: TeamHighlightsPageProps) => {
  const team = teams.find((t) => t.id === parseInt(teamId, 10));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#1F2937', color: '#ffffff' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={team.logo} alt={team.name} style={{ width: '100px', height: '100px' }} />
        <h1>{team.name} Highlights</h1>
      </div>

      <div>
        {team.highlights.map((highlight) => (
          <div key={highlight.id} style={{ marginBottom: '20px', backgroundColor: '#374151', padding: '20px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={highlight.thumbnail} alt={highlight.title} style={{ width: '100px', height: '100px', marginRight: '15px', borderRadius: '10px' }} />
              <div>
                <h2 style={{ margin: '0 0 10px 0' }}>{highlight.title}</h2>
                <p style={{ margin: '0 0 5px 0' }}>Duration: {highlight.duration}</p>
                <p style={{ margin: '0' }}>Date: {highlight.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamHighlightsPage;
