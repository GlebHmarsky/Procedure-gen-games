import { Button, Grid } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const StartPage = () => {
  return (
    <Grid container padding={10} justifyContent={'center'}>
      <Grid item xs={10} lg={6}>
        <Grid container direction='row'>
          <Grid item xs={6}>
            <Link to='/profiles'>
              <Button>
                Profiles
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to='/create'>
              <Button>
                Create
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StartPage