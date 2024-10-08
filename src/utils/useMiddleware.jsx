import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useAuthRedirect = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/sign-up');
    } else if (user.user.role === 'barber') {
      navigate('/admin');
    }
  }, [user, navigate]);

  return user;
};

export default useAuthRedirect;
