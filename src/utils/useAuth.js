export function useAuth() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const isLoggedIn = !!token;

    return {token, user, isLoggedIn };
}