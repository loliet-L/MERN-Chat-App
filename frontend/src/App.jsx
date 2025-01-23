import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './contex/user.contex';
const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}

export default App
App