import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { fetchUser } from '../Requests';
import { useNavigate } from 'react-router-dom';

export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
  const { user, loadUser } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5IiwiZW1haWwiOiJzb3BoaWFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiRW1wbG95ZXIiLCJqdGkiOiJjM2VmZDdmMS01ZmFjLTRmNmYtOGRhMC02NzExNzlmODlhOGIiLCJleHAiOjE3NzAzODE0MzYsImlzcyI6IkNsZWFyVHJ1c3RBZnJpY2EiLCJhdWQiOiJDbGVhclRydXN0QWZyaWNhVXNlcnMifQ.dMLR19VJ0Q7sHziW9VUuLBJ4GAjwIl4xek_gkTxzB0o";

    if (!token) {
      setCheckingAuth(false);
      navigate('/login');
      return;
    }

    if (user) {
      setCheckingAuth(false);
      return;
    }

    fetchUser(token)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Unauthorized");
      })
      .then((data) => {
        localStorage.setItem('accessToken', token);
        console.log(data);
        loadUser(data.user);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("accessToken");
        // navigate('/login');
      })
      .finally(() => {
        setCheckingAuth(false);
      });
  }, []);

  if (checkingAuth) {
    return null;
  }

  return <>{children}</>;
};
