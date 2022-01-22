import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Header from './controls/header';
import ProfilesList from './controls/body';
import { RootState } from 'src/scripts/app/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfiles } from './slice/thunk';

const Profiles = () => {

  const { apiStatus: profilesApiStatus, data: profiles } = useSelector(
    (state: RootState) => state.profiles
  );

  const dispatch = useDispatch()

  useEffect(() => {
    if (profilesApiStatus === 'None'){
      dispatch(fetchProfiles())
    }
    if (profilesApiStatus === 'Success' && profiles){
      console.log(profiles)
    }
  }, [dispatch, profilesApiStatus])

  
  return (
    <Grid container flexDirection="column" alignContent="center" bgcolor="common.white">
      <Grid item sm={7} xs={11}>
        <Grid container>
          <Header />
          <ProfilesList profiles={profiles} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profiles;
