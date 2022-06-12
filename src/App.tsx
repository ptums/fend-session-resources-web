import React, {useState,Suspense,  lazy }  from 'react';
import {
  useQuery,
} from "react-query";
import { request } from "graphql-request";
import CardSession from './components/CardSession';
import Loader from './components/Loader';
import Page from './layout/Page';
import { Session }  from "./types/Session";
import { Game } from "./types/Game";
import { Tutorial } from "./types/Tutorial";
import { sessionQuery, gameQuery, tutorialQuery }  from "./api/queries";


const CardGames = lazy(() => import("./components/CardGames"));
const ContactCard = lazy(() => import("./components/ContactCard"))
const CardTutorials = lazy(() => import("./components/CardTutorials"))
const endpoint = "https://api-us-east-1.graphcms.com/v2/cl43i3zwv5dty01xjaab6hf3j/master";

const useSessions = () => useQuery("sessions", async () => {
  const { sessions } = await request( endpoint, sessionQuery);
  return sessions;
});

const useGames = () => useQuery("games", async () => {
  const { games } = await request(endpoint, gameQuery);
  return games
});

const useTutorials = () => useQuery("tutorials", async () => {
  const { tutorials } = await request(endpoint, tutorialQuery);

  return tutorials;
});

function App() {
  const [page, setPage ] = useState('sessions');
  const { data:sessions, error:sessionError, isFetching:sessionFetching } = useSessions();
  const { data:games, error:gamesError, isFetching:gamesFetching } = useGames();
  const { data:tutorials, error: tutorialsError, isFetching:tutorialsFetching } = useTutorials();
  
  if(sessionError) {
    console.error({ sessionError });
  }
  
  if(gamesError) {
    console.error({ gamesError });
  }
  
  if(tutorialsError) {
    console.error({ tutorialsError });
  }

  if(sessionFetching || tutorialsFetching || gamesFetching) {
    return (
     <Page setPage={setPage}>
        <Loader />
     </Page>
    )
  }

  return (
    <Page setPage={setPage}>
      {page === "sessions" && (
        <ul role="list" className="divide-y divide-gray-200">
          {sessions.map((session: Session) => <CardSession key={session?.title} {...session} /> )}
        </ul>
      )}
    {page === "tutorials" && (
      <Suspense fallback={<Loader />}>
        <ul role="list" className="divide-y divide-gray-200">
          {tutorials
            .sort((a:Tutorial,b: Tutorial) => a?.category.trim().toLowerCase() === b?.category.trim().toLowerCase() ? 1 : -1)
            .map((tutorial:Tutorial) => <CardTutorials key={tutorial?.title} {...tutorial} />)
          }
        </ul>
      </Suspense>
     )}
    {page === "games" && (
       <Suspense fallback={<Loader />}>
         <ul role="list" className="divide-y divide-gray-200">
           {games
             .sort((a:Game, b: Game) => a?.types.trim().toLowerCase() === b?.types.trim().toLowerCase() ? 1 : -1)
             .map((game:Game) => <CardGames key={game?.title} {...game} />)
           }
         </ul>
       </Suspense>
     )}
    {page === "contact" && (
      <Suspense fallback={<Loader />}>
        <ContactCard />
      </Suspense>
    )}
  </Page>
  )
} 

export default App
