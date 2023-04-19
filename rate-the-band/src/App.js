import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';

export function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route path="/detalhes/:id" exact>
      <Details />
      </Route>

      <Route path="/" exact>
      <Search />
      </Route>
      
      <Route path="*" exact> 
      <NotFound/>
      </Route>
    
    </Switch>
    </BrowserRouter>
  );
}
