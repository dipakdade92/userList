import { Routes, Route } from 'react-router-dom';
import './App.css'
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme className="app-container">
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </Theme>
    </QueryClientProvider>
  )
}

export default App
