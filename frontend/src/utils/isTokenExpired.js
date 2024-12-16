import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token) {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    } catch (error) {
        console.error("Invalid token", error);
        return true; 
    }
}

export default isTokenExpired;