


let saveToken = (token: string, userId: number) => {
    localStorage.setItem('token', token);

    localStorage.setItem('userId', userId.toString()); 


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
    return localStorage.getItem('userId');
}






export const accountService = {


    saveToken,
    logout,
    isLogged,
    getUserId 
}
