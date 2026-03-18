import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/admin/LoginForm';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/admin', { replace: true });
    return null;
  }

  function handleLogin(username: string, password: string): boolean {
    const success = login({ username, password });
    if (success) {
      navigate('/admin', { replace: true });
    }
    return success;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login Admin</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}
