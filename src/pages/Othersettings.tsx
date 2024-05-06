import  { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import DefaultLayoutAdm from '../layout/DefaultLayoutAdm';
import axios from 'axios';
import ChatCard from '../components/User';
import Uploadedsolutions from '../components/Uploadedsolutions';

import { accountService } from '../services/account.service';

const Othersettings = () => {
  const [userId, setUserId] = useState<string>('');
  const [formData, setFormData] = useState({
    id: 0, // Initialiser à 0
    username: '',
    email: '',
    passwordHash: '',
    confirmPassword: '',
    telephone: ''
  });

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const loggedInUserId = await accountService.getUserId();
        setUserId(loggedInUserId || '');
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId(); // Appeler la fonction une fois au montage du composant

  }, []);

  useEffect(() => {
    // Mettre à jour l'ID dans formData lors de changements dans userId
    setFormData(prevState => ({
      ...prevState,
      id: Number(userId)
    }));
  }, [userId]); // Surveiller les changements de userId

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5245/User/${formData.id}`, formData);
      console.log(response.data);
      // Traitez la réponse de l'API ici (par exemple, afficher un message de succès)
    } catch (error) {
      console.error(error);
      // Traitez les erreurs de l'API ici (par exemple, afficher un message d'erreur)
    }
  };

  return (
    <DefaultLayoutAdm>
      
       <ChatCard />
        <br></br>
      <Uploadedsolutions/>
      
    </DefaultLayoutAdm>
  );
};

export default Othersettings;
