export interface Session {
  title: string;
  completed: boolean;
	solution: {
   url: string;
  } | null; 
	lessonActivity: {
   url: string
  } | null;
  closeDate: string;
	types: string;
}
