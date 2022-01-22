import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Profiles from '../features/page-profiles';
import CreateProfilePage from 'features/page-create-profile';
import StartPage from 'features/page-start';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {/* <Route path="/" element={<Navigate to="/profiles" />} /> */}
          <Route path="/" element={<StartPage />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="create" element={<CreateProfilePage />} />
          <Route path="404" element={<>{`404 Страница не найдена :(`}</>} />
        </Route>
        <Route path='*' element={<Navigate to="404" />} />
      </Routes>
    </Router>
  );
};

export default Root;
