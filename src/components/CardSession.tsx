import React from 'react';
import { CalendarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from '@heroicons/react/outline';
import {  format } from 'date-fns'
import { generateLabelColors, generateLabel } from "../utils/helpers";
import { Session } from '../types/Session';

const CardSession  = ({ title, completed,  types, closeDate, lessonActivity, solution }: Session) => (
  <li className="block hover:bg-gray-50">
    <div className="px-4 py-4 sm:px-6">
      <div className="flex sm:flex-row flex-col sm:items-center">
        {completed  && <CheckCircleIcon className="w-16 h-16 mr-4 text-green-400" />}
        <div className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="mb-2 text-base font-medium text-indigo-600 truncate sm:mb-0">{title}</p>
            <div className="flex flex-shrink-0 sm:ml-2">
              <p className={`inline-flex px-2 text-xs font-semibold ${generateLabelColors(types)} rounded-full leading-5`}>
                {generateLabel(types)}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="flex flex-row items-center h-5 mt-3 text-sm text-gray-500 sm:mt-1">
                <strong className="mr-2">Downloads:</strong>
                  <a href={lessonActivity?.url} className="mr-3 underline">
                      Lesson & Activity
                    </a>
                    {completed && (

                      <a href={solution?.url} className="underline">
                        <strong>SOLUTION</strong>
                      </a>
                    )}
              </p>
            <div className="flex items-center mt-4 text-sm text-gray-500 sm:mt-2">
              <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
               <p><time dateTime={closeDate}>{format(new Date(closeDate), 'LLLL dd, yyyy')}</time></p>
           </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default CardSession;
