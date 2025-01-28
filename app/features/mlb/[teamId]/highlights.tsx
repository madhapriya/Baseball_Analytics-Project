"use client";
import React from 'react';
import { useRouter } from 'next/router';
import TeamHighlightsPage from '@components/TeamHighlightsPage';//'../../../components/TeamHighlightsPage';

const Highlights = () => {
  const router = useRouter();
  const { teamId } = router.query;

  if (!teamId) return <div>Loading...</div>;

  return <TeamHighlightsPage teamId={teamId as string} />;
};

export default Highlights;



// import React from 'react';
// import TeamHighlightsPage from '../../../components/TeamHighlightsPage';

// const Highlights = () => {
//     return <TeamHighlightsPage />;
// };

// export default Highlights;
