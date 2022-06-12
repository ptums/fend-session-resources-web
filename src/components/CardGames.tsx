import { generateLabelColors } from "../utils/helpers";
import { Game } from "../types/Game";

const Card  = ({ title,  types, url }: Game) => (
  <li className="block hover:bg-gray-50">
    <div className="px-4 py-4 sm:px-6">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-2 text-base font-medium text-indigo-600 truncate sm:mb-0">{title}</p>
          <div className="flex flex-shrink-0 sm:ml-2">
            <p className={`inline-flex px-2 text-xs font-semibold ${generateLabelColors(types)} rounded-full leading-5`}>
                 {types}
             </p>
           </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between">
           <div className="sm:flex">
              <p className="flex flex-row items-center h-5 text-sm text-gray-500">
                  <a href={url} className="mr-2 underline" rel="noopener noreferrer nofollow">
                    {url}  
                  </a>
              </p>                   
           </div>
           
        </div>
      </div>
  </li>


);

export default Card;
