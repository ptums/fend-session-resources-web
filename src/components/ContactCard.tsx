import React from "react";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
const person = {
  imageUrl: "https://www.tumulty.dev/_next/image?url=%2Fimages%2Fpeter-face.webp&w=384&q=75",
  name: "Peter Tumulty",
  role: "Senior Frontend Engineer",
  twitterUrl:"https://twitter.com/ptums923",
  linkedinUrl:"https://www.linkedin.com/in/petertumulty",
  email: "ptumulty923@gmail.com"
}
const ContactCard = () => (
<li className="max-w-xl px-6 py-10 mx-auto text-center bg-gray-800 rounded-lg xl:px-10 xl:text-left">

                <div className="space-y-6 xl:space-y-10">
                  <img className="w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt={person?.name} />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="text-lg font-medium leading-6 space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-indigo-400">{person.role}</p>
                      <p className="text-indigo-400">{person.email}</p>
                    </div>


                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300" target="_blank">
                          <span className="sr-only">Twitter</span>
                          <AiOutlineTwitter  className="w-5 h-5"/> 
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300" target="_blank">
                          <span className="sr-only">LinkedIn</span>
                          <AiFillLinkedin className="w-5 h-5"/> 
                        </a>
                      </li>
                       <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300" target="_blank">
                          <span className="sr-only">Github</span>
                          
                          <AiOutlineGithub  className="w-5 h-5"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
);

export default ContactCard;
