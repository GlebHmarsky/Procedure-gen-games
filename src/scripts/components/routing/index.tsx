import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import StartPage from 'features/page-start';
import { CREATE_GAME_PATH, GAMES_PATH, NOT_FOUND, SOME_GAME_PATH } from './routes.config';
import { CreateGame } from 'features/page-create-game';
import { Games } from 'features/page-games';
import { SomeGame } from 'features/some-game';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path={GAMES_PATH} element={<Games />} />
        <Route path={CREATE_GAME_PATH} element={<CreateGame />} />
        <Route path={NOT_FOUND} element={<>{`404 Страница не найдена :(`}</>} />

        <Route path={SOME_GAME_PATH} element={<SomeGame />} />
        <Route path='*' element={<Navigate to="404" />} />
      </Routes>
    </Router>
  );
};

export default Root;
