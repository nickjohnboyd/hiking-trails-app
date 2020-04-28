import { Trail } from './trail';

export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	emailVerified: boolean;
	favorites?: Trail[];
	completed?: Trail[];
}
