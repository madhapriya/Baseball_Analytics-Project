// export default function Features() {
//   return (
//     <div className="container mx-auto px-4 py-12 dark:bg-gray-900 dark:text-gray-100">
//       <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Our Features</h1>
      
//       <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Personalized Fan Highlights</h2>
//         <p className="mb-4 dark:text-gray-100">Select your favorite teams and players to receive customized highlight reels after each game.</p>
//         {/* Add a demo video or interactive component here */}
//       </section>

//       <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Real-Time "Tool Tips"</h2>
//         <p className="mb-4 dark:text-gray-100">Get instant insights and strategy explanations during live games.</p>
//         {/* Add an interactive demo here */}
//       </section>

//       <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Statcast Data Extraction</h2>
//         <p className="mb-4 dark:text-gray-100">Upload game videos and extract valuable Statcast data for in-depth analysis.</p>
//         {/* Add a file upload component or demo here */}
//       </section>

//       <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Prospect Prediction</h2>
//         <p className="mb-4 dark:text-gray-100">Use our AI-powered tool to predict the potential of rising baseball stars.</p>
//         {/* Add a demo prediction form or results here */}
//       </section>
//     </div>
//   )
// }

// "use client";
// import { useEffect, useState } from 'react';

// // Define the Team type
// interface Team {
//     id: number;
//     name: string;
//     logo: string;
// }

// const MLBPage = () => {
//     const [teams, setTeams] = useState<Team[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         fetchTeams();
//     }, []);

//     const fetchTeams = async () => {
//         try {
//             const response = await fetch('/api/teams'); // Ensure this matches the updated API route
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({
//                 id: data.id[index],
//                 name: data.teamName[index],
//                 logo: data.logo_link[index]
//             }));
//             setTeams(formattedTeams);
//         } catch (error) {
//             console.error('Failed to fetch teams:', error);
//             setError(error instanceof Error ? error.message : 'An unknown error occurred');
//         }
//     };
    

//     // const fetchTeams = async () => {
//     //     try {
//     //         console.log('Starting fetch request...');
//     //         const response = await fetch('http://localhost:3000/api/teams'); // Adjust URL for production

//     //         // const response = await fetch('/api/teams');
//     //         console.log('Fetch request completed. Response:', response);

//     //         if (!response.ok) {
//     //             throw new Error(`HTTP error! status: ${response.status}`);
//     //         }

//     //         const data = await response.json();
//     //         console.log('Fetched data:', data);

//     //         const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({
//     //             id: data.id[index],
//     //             name: data.teamName[index],
//     //             logo: data.logo_link[index]
//     //         }));
//     //         setTeams(formattedTeams);
//     //     } catch (error) {
//     //         console.error('Failed to fetch teams:', error);
//     //         if (error instanceof Error) {
//     //             setError(error.message);
//     //         } else {
//     //             setError('An unknown error occurred');
//     //         }
//     //     }
//     // };

//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>MLB Teams</h1>
//             {error ? (
//                 <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
//             ) : (
//                 <ul style={{ maxWidth: '600px', margin: '50px auto', padding: '0', listStyle: 'none' }}>
//                     {teams.map((team) => (
//                         <li key={team.id} style={{
//                             backgroundColor: '#fff',
//                             margin: '10px 0',
//                             padding: '20px',
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                             alignItems: 'center',
//                             border: '1px solid #ddd',
//                             borderRadius: '5px'
//                         }}>
//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <img src={team.logo} alt={team.name} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
//                                 <span>{team.name}</span>
//                             </div>
//                             <button style={{
//                                 backgroundColor: '#007bff',
//                                 color: '#fff',
//                                 border: 'none',
//                                 padding: '10px 20px',
//                                 cursor: 'pointer',
//                                 borderRadius: '5px'
//                             }} onClick={() => alert(`You followed the ${team.name}`)}>
//                                 Follow
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MLBPage;






// import TeamsAndPlayers from '../components/TeamsAndPlayers.js';

// const Features = () => {
//   return (
//     <div>
//       <h1>Features Page</h1>
//       <TeamsAndPlayers />
//     </div>
//   );
// };

// export default Features;

//  ----- this is teams file
// "use client";

// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
//     const [featuresOpen, setFeaturesOpen] = useState(false);

//     return (
//         <header style={{ backgroundColor: '#007bff', padding: '10px' }}>
//             <nav>
//                 <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
//                     </li>
//                     <li style={{ position: 'relative', marginRight: '20px' }}>
//                         <span
//                             onClick={() => setFeaturesOpen(!featuresOpen)}
//                             style={{ color: '#fff', cursor: 'pointer', textDecoration: 'none' }}>
//                             Features
//                         </span>
//                         {featuresOpen && (
//                             <ul style={{
//                                 position: 'absolute',
//                                 top: '30px',
//                                 left: '0',
//                                 listStyle: 'none',
//                                 backgroundColor: '#007bff',
//                                 padding: '10px',
//                                 borderRadius: '5px',
//                                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                                 zIndex: 1
//                             }}>
//                                 <li style={{ marginBottom: '10px' }}>
//                                     <Link href="/features/mlb" style={{ color: '#fff', textDecoration: 'none' }}>Teams</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/features/players" style={{ color: '#fff', textDecoration: 'none' }}>Players</Link>
//                                 </li>
//                             </ul>
//                         )}
//                     </li>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
//                     </li>
//                     <li style={{ marginRight: '20px' }}>
//                         <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
//                     </li>
//                     <li>
//                         <Link href="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Our Features</h1>
      
      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Personalized Fan Highlights</h2>
        <p className="mb-4 dark:text-gray-100">Select your favorite teams and players to receive customized highlight reels after each game.</p>
        {/* Add a demo video or interactive component here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Real-Time "Tool Tips"</h2>
        <p className="mb-4 dark:text-gray-100">Get instant insights and strategy explanations during live games.</p>
        {/* Add an interactive demo here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Statcast Data Extraction</h2>
        <p className="mb-4 dark:text-gray-100">Upload game videos and extract valuable Statcast data for in-depth analysis.</p>
        {/* Add a file upload component or demo here */}
      </section>

      <section className="mb-12 dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Prospect Prediction</h2>
        <p className="mb-4 dark:text-gray-100">Use our AI-powered tool to predict the potential of rising baseball stars.</p>
        {/* Add a demo prediction form or results here */}
      </section>
    </div>
  )
}

