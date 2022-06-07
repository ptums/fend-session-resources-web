import React, {useState }  from 'react';
import CardLesson from './components/CardLesson';
import CardGames from './components/CardGames';
import ContactCard from './components/ContactCard';
import Header from './components/Header';
import lessons from "./lessons.json";
import games from "./games.json";

function App() {
  const [page, setPage ] = useState('sessions');
  return (
  <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <Header setPage={setPage}/>
     <div className="py-12 mx-4 sm:mx-auto max-w-screen-xl">
       <div className="w-full bg-white shadow sm:rounded-md">
         {page === "sessions" && (
           <ul role="list" className="divide-y divide-gray-200">
             {lessons.map((lesson) => <CardLesson key={lesson?.title} {...lesson} /> )}
           </ul>
         )}
         {page === "tutorials" && (
            <div>Tutorial</div>
          )}
         {page === "games" && (
            <ul role="list" className="divide-y divide-gray-200">
             {games.map(game => <CardGames key={game?.title} {...game} /> )}
           </ul>
         )}
        </div>
        {page === "contact" && <ContactCard />}

     </div>
    </div>

  )
} 

export default App
