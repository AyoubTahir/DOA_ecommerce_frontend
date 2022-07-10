import { Routes, Route } from 'react-router-dom'
import Master from "./layouts/admin/Master";
import Dashboard from './pages/admin/dashboard/Dashboard';
import List from './pages/admin/users/List';
import New from './pages/admin/users/New';
import Edit from './pages/admin/users/Edit';

function App() {
  return (
    <Routes>

      <Route path='/admin'>
        <Route element={<Master />}>

          {/*Dashboard*/}
          <Route index element={<Dashboard />} />

          {/*Users*/}
          <Route path='users' >
            <Route index element={<List />} />
            <Route path='new' element={<New />} />
            <Route path='edit/:id' element={<Edit />} />
          </Route>

          {/*Products*/}

        </Route>
      </Route>

      <Route path='/'>

      </Route>

    </Routes>
  );
}

export default App;
