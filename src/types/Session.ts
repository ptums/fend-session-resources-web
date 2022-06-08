export interface Session {
  title: string;
	solution: {
   url: string;
  } | null; 
	lessonActivity: {
   url: string
  } | null;
  closeDate: string;
	types: string;
}
