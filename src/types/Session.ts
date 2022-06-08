export interface Session {
  title: string;
	solution: string;
	lessonActivity: {
   url: string
  } | null;
	closeDate:{
   url: string;
  } | null;
	types: string;
}
