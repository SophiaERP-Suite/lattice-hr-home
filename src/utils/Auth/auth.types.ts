export interface User {
  userId: number;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  phone: string;
  userType: string;
  employerId: number;
  businessName: string;
}

export interface AuthData {
  token: string;
  user: User;
}

export interface AuthContextType {
  user: User | null;
  login: (data: AuthData) => void;
  loadUser: (data: User) => void;
  logout: () => void;
}
