import { Routes, Route } from 'react-router-dom'
import Master from "./layouts/admin/Master";
import Dashboard from './pages/admin/dashboard/Dashboard';
import List from './pages/admin/users/List';
import New from './pages/admin/users/New';
import Edit from './pages/admin/users/Edit';
import Login from './pages/admin/auth/Login';
import { Categories, NewCategory, EditCategory } from './pages/admin';

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

          {/*Categories*/}
          <Route path='categories' >
            <Route index element={<Categories />} />
            <Route path='new' element={<NewCategory />} />
            <Route path='edit/:id' element={<EditCategory />} />
          </Route>

          {/*Products*/}

        </Route>

        {/*Auth*/}
        <Route path='login' element={<Login />} />

      </Route>

      <Route path='/'>

      </Route>

    </Routes>
  );
}

export default App;
