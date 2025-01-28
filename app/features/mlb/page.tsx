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
//             const response = await fetch('/api/teams');
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

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif' }}>
//             <header style={{ backgroundImage: 'url("/path-to-baseball-image.jpg")', backgroundSize: 'cover', padding: '40px', textAlign: 'center', color: '#fff' }}>
//                 <h1 style={{ fontSize: '48px', margin: '0' }}>All 30 MLB Team Locations</h1>
//                 <p style={{ fontSize: '20px' }}>Find out ballpark name and address, phone, and website information for all 30 Major League Baseball teams below.</p>
//             </header>
//             {error ? (
//                 <p style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</p>
//             ) : (
//                 <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
//                         {teams.map((team) => (
//                             <div key={team.id} style={{
//                                 backgroundColor: '#fff',
//                                 border: '1px solid #ddd',
//                                 borderRadius: '10px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                 overflow: 'hidden',
//                                 transition: 'transform 0.2s'
//                             }}
//                             onMouseOver={(e) => {
//                                 (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
//                             }}
//                             onMouseOut={(e) => {
//                                 (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
//                             }}>
//                                 <img src={team.logo} alt={team.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
//                                 <div style={{ padding: '20px' }}>
//                                     <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>{team.name}</h2>
//                                     <button style={{
//                                         backgroundColor: '#007bff',
//                                         color: '#fff',
//                                         border: 'none',
//                                         padding: '10px 20px',
//                                         cursor: 'pointer',
//                                         borderRadius: '5px',
//                                         transition: 'background-color 0.3s'
//                                     }}
//                                     onMouseOver={(e) => {
//                                         (e.currentTarget as HTMLElement).style.backgroundColor = '#0056b3';
//                                     }}
//                                     onMouseOut={(e) => {
//                                         (e.currentTarget as HTMLElement).style.backgroundColor = '#007bff';
//                                     }}
//                                     onClick={() => alert(`You followed the ${team.name}`)}>
//                                         Follow
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MLBPage;

// "use client";
// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';

// // Define the Team type
// interface Team {
//     id: number;
//     name: string;
//     logo: string;
// }

// const MLBPage = () => {
//     const [teams, setTeams] = useState<Team[]>([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const { theme } = useTheme();

//     useEffect(() => {
//         fetchTeams();
//     }, []);

//     const fetchTeams = async () => {
//         try {
//             const response = await fetch('/api/teams');
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

//     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredTeams = teams.filter((team) =>
//         team.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: theme === 'dark' ? 'rgb(17 24 39 / var(--tw-bg-opacity, 1))' : '#ffffff', color: theme === 'dark' ? 'rgb(243 244 246 / var(--tw-text-opacity, 1))' : '#000000' }}>
//             <h1 style={{ textAlign: 'center', color: theme === 'dark' ? '#FF9800' : '#007bff', fontSize: '36px' }}>MLB Teams</h1>
//             <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px', color: theme === 'dark' ? '#bdbdbd' : '#000000' }}>
//                 Welcome to the MLB Teams page! Here you can explore detailed information, follow your favorite teams, and watch video highlights.
//             </p>
//             <input
//                 type="text"
//                 placeholder="Search for a team..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="p-2 rounded-md transition-colors mb-4 w-full"
//                 style={{
//                     marginBottom: '20px',
//                     padding: '10px',
//                     width: '100%',
//                     borderRadius: '5px',
//                     border: theme === 'dark' ? '1px solid #444' : '1px solid #ddd',
//                     backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
//                     color: theme === 'dark' ? '#fff' : '#000',
//                     fontSize: '16px'
//                 }}
//             />
//             {error ? (
//                 <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
//             ) : (
//                 <ul className="max-w-2xl mx-auto list-none p-0">
//                     {filteredTeams.map((team) => (
//                         <li key={team.id} className="mb-4 p-4 flex justify-between items-center border rounded-lg shadow-md hover:shadow-lg transition-shadow"
//                             style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#f0f0f0', borderColor: theme === 'dark' ? '#3D5A80' : '#ddd' }}
//                             onMouseOver={(e) => {
//                                 (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#374151' : '#e0e0e0';
//                             }}
//                             onMouseOut={(e) => {
//                                 (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#1F2937' : '#f0f0f0';
//                             }}>
//                             <div className="flex items-center">
//                                 <img src={team.logo} alt={team.name} className="w-12 h-12 mr-4" />
//                                 <span className="font-bold text-lg" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>{team.name}</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <button
//                                     className="p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white mr-2 transition-colors"
//                                     onClick={() => alert(`You followed the ${team.name}`)}
//                                 >
//                                     Follow
//                                 </button>
//                                 <button
//                                     className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors"
//                                     onClick={() => window.location.href = `/team/${team.id}`}
//                                 >
//                                     Watch Highlights
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MLBPage;

// "use client";
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import Link from 'next/link';

// interface Team {
//     id: number;
//     name: string;
//     logo: string;
// }

// const MLBPage = () => {
//     const [teams, setTeams] = useState<Team[]>([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const { theme } = useTheme();

//     useEffect(() => {
//         fetchTeams();
//     }, []);

//     const fetchTeams = async () => {
//         try {
//             const response = await fetch('/api/teams');
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

//     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredTeams = teams.filter((team) =>
//         team.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: theme === 'dark' ? 'rgb(17, 24, 39)' : '#ffffff', color: theme === 'dark' ? 'rgb(243, 244, 246)' : '#000000' }}>
//             <h1 style={{ textAlign: 'center', color: theme === 'dark' ? '#FF9800' : '#007bff', fontSize: '36px' }}>MLB Teams</h1>
//             <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px', color: theme === 'dark' ? '#bdbdbd' : '#000000' }}>
//                 Welcome to the MLB Teams page! Here you can explore detailed information, follow your favorite teams, and watch video highlights.
//             </p>
//             <input
//                 type="text"
//                 placeholder="Search for a team..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="p-2 rounded-md transition-colors mb-4 w-full"
//                 style={{
//                     marginBottom: '20px',
//                     padding: '10px',
//                     width: '100%',
//                     borderRadius: '5px',
//                     border: theme === 'dark' ? '1px solid #444' : '1px solid #ddd',
//                     backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
//                     color: theme === 'dark' ? '#fff' : '#000',
//                     fontSize: '16px'
//                 }}
//             />
//             {error ? (
//                 <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
//             ) : (
//                 <ul className="max-w-2xl mx-auto list-none p-0">
//                     {filteredTeams.map((team) => (
//                         <li key={team.id} className="mb-4 p-4 flex justify-between items-center border rounded-lg shadow-md hover:shadow-lg transition-shadow"
//                             style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#f0f0f0', borderColor: theme === 'dark' ? '#3D5A80' : '#ddd' }}
//                             onMouseOver={(e) => {
//                                 (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#374151' : '#e0e0e0';
//                             }}
//                             onMouseOut={(e) => {
//                                 (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#1F2937' : '#f0f0f0';
//                             }}>
//                             <div className="flex items-center">
//                                 <img src={team.logo} alt={team.name} className="w-12 h-12 mr-4" />
//                                 <span className="font-bold text-lg" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>{team.name}</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <button
//                                     className="p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white mr-2 transition-colors"
//                                     onClick={() => alert(`You followed the ${team.name}`)}
//                                 >
//                                     Follow
//                                 </button>

//                                 <button
//                                     className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors"
//                                     Link href={`/team/${team.id}/highlights`}
//                                 >
//                                     Watch Highlights
//                                 </Link>
//                                 </button>
//                                 {/* <button
//                                     className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors"
//                                     onClick={() => window.location.href = `/team/${team.id}/highlights`}
//                                 >
//                                     Watch Highlights
//                                 </button> */}
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default MLBPage;

"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface Team {
    id: number;
    name: string;
    logo: string;
}

const MLBPage = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await fetch('/api/teams');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({
                id: data.id[index],
                name: data.teamName[index],
                logo: data.logo_link[index]
            }));
            setTeams(formattedTeams);
        } catch (error) {
            console.error('Failed to fetch teams:', error);
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: theme === 'dark' ? 'rgb(17, 24, 39)' : '#ffffff', color: theme === 'dark' ? 'rgb(243, 244, 246)' : '#000000' }}>
            <h1 style={{ textAlign: 'center', color: theme === 'dark' ? '#FF9800' : '#007bff', fontSize: '36px' }}>MLB Teams</h1>
            <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px', color: theme === 'dark' ? '#bdbdbd' : '#000000' }}>
                Welcome to the MLB Teams page! Here you can explore detailed information, follow your favorite teams, and watch video highlights.
            </p>
            <input
                type="text"
                placeholder="Search for a team..."
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 rounded-md transition-colors mb-4 w-full"
                style={{
                    marginBottom: '20px',
                    padding: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: theme === 'dark' ? '1px solid #444' : '1px solid #ddd',
                    backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#000',
                    fontSize: '16px'
                }}
            />
            {error ? (
                <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
            ) : (
                <ul className="max-w-2xl mx-auto list-none p-0">
                    {filteredTeams.map((team) => (
                        <li key={team.id} className="mb-4 p-4 flex justify-between items-center border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#f0f0f0', borderColor: theme === 'dark' ? '#3D5A80' : '#ddd' }}
                            onMouseOver={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#374151' : '#e0e0e0';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = theme === 'dark' ? '#1F2937' : '#f0f0f0';
                            }}>
                            <div className="flex items-center">
                                <img src={team.logo} alt={team.name} className="w-12 h-12 mr-4" />
                                <span className="font-bold text-lg" style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}>{team.name}</span>
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white mr-2 transition-colors"
                                    onClick={() => alert(`You followed the ${team.name}`)}
                                >
                                    Follow
                                </button>

                                <Link href={`/team/${team.id}/highlights`}>
                                    <button
                                        className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-colors"
                                    >
                                        Watch Highlights
                                    </button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MLBPage;
