export const generateLabelColors = (type: string) => {
  const typeTrimmed = type.trim();
  switch(typeTrimmed){
    case 'CSS':
      return 'bg-green-100 text-green-800';
    case 'JavaScript':
      return 'bg-blue-100 text-blue-800';
    case 'Intro':
      return 'bg-yellow-100 text-yellow-800';
    case 'VS Code':
      return 'bg-green-100 text-green-800';
    case 'Computer Basics':
      return 'bg-blue-100 text-blue-800';
    case 'Code Sandbox':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return "bg-stone-100 text-stone-800";
  }
}

export const generateLabel = (type: string) => {
  const typeTrimmed = type.trim();

  switch(typeTrimmed){
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
