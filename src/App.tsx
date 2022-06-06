import React, {useState }  from 'react';
import Card from './components/Card';
import Header from './components/Header';
import lessons from "./lessons.json";

function App() {
  const [page, setPage ] = useState('sessions');
  return (
  <div className="bg-gradient-to-r min-h-screen from-cyan-500 to-blue-500">
    <Header setPage={setPage}/>
     <div className="py-12 mx-4 sm:mx-auto max-w-screen-xl">
       <div className="w-full bg-white shadow sm:rounded-md">
         {page === "sessions" && (
           <ul role="list" className="divide-y divide-gray-200">
             {lessons.map((lesson) => <Card key={lesson?.title} {...lesson} /> )}
           </ul>
         )}
         {page === "tutorials" && (
            <div>Tutorial</div>
          )}
         {page === "resources" && (
            <div>Resources</div>
         )}
         {page === "contact" && (
            <div>Contact</div>
         )}
      
        
        

        
        </div>
     </div>
    </div>

  )
} 

export default App
