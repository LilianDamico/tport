import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/layout/Index';
import Dashboard from './pages/dashboard/Index';
import List from './pages/list/Index';
import dark from './styles/themes/dark';



const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
        <List />
      </Layout>                
    </ThemeProvider>
  )
}

export default App
