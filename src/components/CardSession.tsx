import React from 'react';
import { CalendarIcon } from "@heroicons/react/solid";
import {  format } from 'date-fns'
import { generateLabelColors, generateLabel } from "../utils/helpters";
import { Session } from '../types/Session';

const Card  = ({ title, types, closeDate, lessonActivity, solution }: Session) => (
  <li className="block hover:bg-gray-50">
    <div className="px-4 py-4 sm:px-6">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-2 text-base font-medium text-indigo-600 truncate sm:mb-0">{title}</p>
          <div className="flex flex-shrink-0 sm:ml-2">
            <p className={`inline-flex px-2 text-xs font-semibold ${generateLabelColors(types)} rounded-full leading-5`}>
                 {generateLabel(types)}
             </p>
           </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
           <div className="sm:flex">
              <p className="flex flex-row items-center h-5 text-sm text-gray-500">
                <strong className="mr-2">Downloads:</strong>
                  <a href={lessonActivity?.url} className="mr-3 underline">
                      Lesson & Activity
                    </a>
                    {Boolean(solution) && (

                      <a href={solution} className="underline">
                        <strong>SOLUTION</strong>
                      </a>
                    )}
              </p>                   
           </div>
           <div className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0">
              <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
               <p><time dateTime={closeDate}>{format(new Date(closeDate), 'MM-dd-yyyy')}</time></p>
           </div>
        </div>
      </div>
  </li>


);

export default Card;
