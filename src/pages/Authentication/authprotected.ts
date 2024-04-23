import { ReactNode, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { accountService } from "../../services/account.service";

const AuthProtected = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!accountService.isLogged()) {
            
            navigate('/auth/signin');
        }
    }, [navigate]);

   
    return accountService.isLogged() ? children : null;
};

export default AuthProtected;
