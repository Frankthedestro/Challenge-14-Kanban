import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // returns decoded token
    const token = this.getToken();
    if (!token) return null;
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // return a value that indicates if the user is logged in
      const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
    
  }
  
    isTokenExpired(token: string) {
    // return a value that indicates if the token is expired
try {
  const decoded = jwtDecode<JwtPayload>(token);
  if (!decoded.exp) return true;
  
  // Compare expiration time with current time
  return decoded.exp * 1000 < Date.now();
} catch (err) {
  // If token can't be decoded, consider it expired
  return true;
}
  }

  getToken(): string {
    // return the token
    return localStorage.getItem('id_token') || '';
  }

 login(idToken: string) {
    // set the token to localStorage
    localStorage.setItem('id_token', idToken);
     // redirect to the home page
    window.location.assign('/');

  }

  logout() {
    // remove the token from localStorage
      localStorage.removeItem('id_token');
      // redirect to the login page
      window.location.assign('/login');
  }
}


export default new AuthService();
