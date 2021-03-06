import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/scripts/app/rootReducer';
import ProfilesList from './controls/body';
import Header from './controls/header';
import { fetchGames } from './slice/thunk';

export const Games = () => {

  const { apiStatus: profilesApiStatus, data: profiles } = useSelector(
    (state: RootState) => state.profiles
  );

  const dispatch = useDispatch()

  useEffect(() => {
    if (profilesApiStatus === 'None') {
      dispatch(fetchGames())
    }
    if (profilesApiStatus === 'Success' && profiles) {
      console.log(profiles)
    }
  }, [dispatch, profilesApiStatus])


  return (
    <Grid container flexDirection="column" alignContent="center" bgcolor="common.white">
      <Grid item sm={7} xs={11}>
        <Grid container>
          <Header />
          <ProfilesList games={profiles} />
        </Grid>
      </Grid>
    </Grid>
  );
};
