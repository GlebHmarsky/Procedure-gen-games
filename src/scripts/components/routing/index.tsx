import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import StartPage from 'features/page-start';
import { CREATE_GAME_PATH, GAMES_PATH, NOT_FOUND } from './routes.config';
import { CreateGame } from 'features/page-create-game';
import { Games } from 'features/page-games';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path={GAMES_PATH} element={<Games />} />
        <Route path={CREATE_GAME_PATH} element={<CreateGame />} />
        <Route path={NOT_FOUND} element={<>{`404 Страница не найдена :(`}</>} />
        <Route path='*' element={<Navigate to="404" />} />
      </Routes>
    </Router>
  );
};

export default Root;
