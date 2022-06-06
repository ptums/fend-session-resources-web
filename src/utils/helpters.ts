export const generateLabelColors = (type: string) => {
  switch(type){
    case 'Intro to Web Development':
     return 'bg-green-100 text-green-800';
    case 'Intermediate CSS: Flexbox and Grid':
     return 'bg-blue-100 text-blue-800';
    case 'JavaScript & The DOM':
     return 'bg-yellow-100 text-yellow-800';
   default:
    return "bg-stone-100 text-stone-800";
 }
}
