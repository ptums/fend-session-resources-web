import React, {useState }  from 'react';
import {
  useQuery,
} from "react-query";
import { request } from "graphql-request";
import CardSession from './components/CardSession';
import CardGames from './components/CardGames';
import ContactCard from './components/ContactCard';
import Header from './components/Header';
import Loader from './components/Loader';
import { Session }  from "./types/Session";
import { Game } from "./types/Game";
import { sessionQuery, gameQuery }  from "./api/queries";

const endpoint = "https://api-us-east-1.graphcms.com/v2/cl43i3zwv5dty01xjaab6hf3j/master";

const useSessions = () => useQuery("sessions", async () => {
  const { sessions } = await request( endpoint, sessionQuery);
  return sessions;
});

const useGames = () => useQuery("games", async () => {
  const { games } = await request(endpoint, gameQuery);
  return games
})

function App() {
  const [page, setPage ] = useState('sessions');
  const { data:sessions, error:sessionError, isFetching:sessionFetching } = useSessions();
  const { data:games, error:gamesError, isFetching:gamesFetching } = useGames();
  
  console.log({ sessions, games })
  
  if(sessionError) {
    console.error({ sessionError });
  }
  
  if(gamesError) {
    console.error({ gamesError });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header setPage={setPage}/>
       <div className="py-12 mx-4 sm:mx-auto max-w-screen-xl">
         <div className="w-full bg-white shadow sm:rounded-md">
           {page === "sessions" && (
             <>
               {sessionFetching ? (
                 <Loader />
               ) : (
                 <ul role="list" className="divide-y divide-gray-200">
                   {sessions.map((session: Session) => <CardSession key={session?.title} {...session} /> )}
                 </ul>
               )}
             </>
           )}
           {page === "tutorials" && (
              <div>Tutorial</div>
           )}
           {page === "games" && (
              <>
                {gamesFetching ? (
                  <Loader />
                ) : (
                  <ul role="list" className="divide-y divide-gray-200">
                   {games.map((game:Game) => <CardGames key={game?.title} {...game} /> )}
                 </ul>
                )}
             </>
           )}

          </div>
          {page === "contact" && <ContactCard />}
        </div>
      </div>
  )
} 

export default App
