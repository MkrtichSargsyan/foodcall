import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import SearchBar from './components/SearchBar/SearchBar';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <>
      <SearchBar />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
