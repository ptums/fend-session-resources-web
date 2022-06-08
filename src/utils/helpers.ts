export const generateLabelColors = (type: string) => {
  switch(type){
    case 'CSS':
        return 'bg-green-100 text-green-800';
    case 'JavaScript':
      return 'bg-blue-100 text-blue-800';
    case 'Intro':
     return 'bg-yellow-100 text-yellow-800';
   default:
    return "bg-stone-100 text-stone-800";
 }
}

export const generateLabel = (type: string) => {
  switch(type){
    case 'Intro':
      return 'Intro to Web Development';
    case 'CSS':
      return 'Intermediate CSS: Flexbox and Grid';
    case 'JavaScript':
      return 'JavaScript & the DOM';
   default:
     return "";
  }
}
