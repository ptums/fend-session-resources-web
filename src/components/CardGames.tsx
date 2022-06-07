import React from 'react';
import { CalendarIcon } from "@heroicons/react/solid";
import { generateLabelColors } from "../utils/helpters";

interface Props {
    title: string;
    type: string;
    url: string;
 
}
const Card  = ({ title,  type, url }: Props) => (
  <li className="block hover:bg-gray-50">
    <div className="px-4 py-4 sm:px-6">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-2 text-base font-medium text-indigo-600 truncate sm:mb-0">{title}</p>
          <div className="flex flex-shrink-0 sm:ml-2">
            <p className={`inline-flex px-2 text-xs font-semibold ${generateLabelColors(type)} rounded-full leading-5`}>
                 {type}
             </p>
           </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
           <div className="sm:flex">
              <p className="flex flex-row items-center h-5 text-sm text-gray-500">
                  <a href={url} className="mr-2 underline">
                    {url}  
                  </a>
              </p>                   
           </div>
           
        </div>
      </div>
  </li>


);

export default Card;
