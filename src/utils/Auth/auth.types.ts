export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
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
