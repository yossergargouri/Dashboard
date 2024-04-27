let saveToken = (token: string, userId: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId); 
}

let logout =() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); 
}

let isLogged = () => {
    let token =  localStorage.getItem('token');
    let userId = localStorage.getItem('userId'); 
    return !!token && !!userId; 
}

let getUserId = () => {
    return localStorage.getItem('userId'); // Ajoutez cette fonction pour récupérer l'ID de l'utilisateur
}

export const accountService = {
    saveToken,
    logout,
    isLogged,
    getUserId // Ajoutez cette fonction à l'export
}
