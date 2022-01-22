import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { CardTextTypography, ProfileCard } from './styled';

const ProfilesList = ({ profiles }: { profiles: Components.IProfile[] }) => {
  return (
    <Grid
      container
      flexDirection="row"
      spacing={4}
      justifyContent="center"
      flexWrap="wrap"
    >
      {profiles.map((profile, i) => {
        return (
          <Grid key={i} item xs={12} lg={6}>
            <ProfileCard
              sx={{
                p: 2,
              }}
            >
              <Grid container flexDirection="row" spacing={2} flexWrap="nowrap">
                <Grid item alignItems="center" display="flex">
                  <Card
                    elevation={0}
                    sx={{
                      width: '4rem',
                      height: '4rem',
                      bgcolor: '#eee',
                      p: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="subtitle1" fontSize="1.8rem">
                      {profile.name
                        .split(' ')
                        .map((v) => {
                          return v[0].toUpperCase();
                        })
                        .splice(0, 2)
                        .join('')}
                    </Typography>
                  </Card>
                </Grid>

                <Grid item>
                  <CardTextTypography
                    variant="h6"
                    lineHeight="1.4"
                  >
                    {profile.name}
                  </CardTextTypography>
                  <Grid container spacing={1.5}>
                    <Grid item>
                      <Typography
                        variant="body2"
                        fontSize="0.85rem"
                        color="text.secondary"
                      >
                        {profile.description}
                      </Typography>
                    </Grid>
                    {/* <Grid item>
                      <Typography
                        variant="body2"

                      >
                        {profile.city}
                      </Typography>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </ProfileCard>
          </Grid>
        );
      })}
    </Grid >
  );
};

export default ProfilesList;
