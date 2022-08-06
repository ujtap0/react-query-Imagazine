import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Routes from './Routes';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
