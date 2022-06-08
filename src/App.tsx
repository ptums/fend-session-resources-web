import React, {useState }  from 'react';
import {
  useQuery,
  useQueryClient,
} from "react-query";
import { request, gql } from "graphql-request";
import CardSession from './components/CardSession';
import CardGames from './components/CardGames';
import ContactCard from './components/ContactCard';
import Header from './components/Header';
import lessons from "./lessons.json";
import games from "./games.json";
import { sessionQuery }  from "./api/queries";

const endpoint = "https://api-us-east-1.graphcms.com/v2/cl43i3zwv5dty01xjaab6hf3j/master";

const useSessions = () => useQuery("sessions", async () => {
  const { sessions } = await request(
    endpoint,
    sessionQuery
  );
  return sessions;
})

function App() {
  const [page, setPage ] = useState('sessions');
  const { data:sessions, error:sessionError, isFetching:sessionFetching } = useSessions();

  console.log({ sessions })
  
  if(sessionError) {
    console.error({ sessionError });
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header setPage={setPage}/>
       <div className="py-12 mx-4 sm:mx-auto max-w-screen-xl">
         <div className="w-full bg-white shadow sm:rounded-md">
           {page === "sessions" && (
             <>
               {sessionFetching ? (
                  <p>Insert Loader..</p>
               ) : (
                 <ul role="list" className="divide-y divide-gray-200">
                   {sessions.map((session) => <CardSession key={session?.title} {...session} /> )}
                 </ul>
               )}
             </>
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
