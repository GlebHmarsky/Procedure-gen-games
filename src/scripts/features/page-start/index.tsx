import { Button, Grid } from "@mui/material"
import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import { CREATE_GAME_PATH, GAMES_PATH } from "src/scripts/components/routing/routes.config"
import theme from "themes/main"
type TLink = {
  text: string,
  path: string,
}
const StartPage = () => {

  const links: TLink[] = useMemo(() => [
    {
      text: 'CREATE_GAME_PATH',
      path: CREATE_GAME_PATH,
    },
    {
      text: 'GAMES_PATH',
      path: GAMES_PATH,
    },
  ], [])

  return (
    <Grid container padding={10} justifyContent={'center'}>
      <Grid item xs={10} lg={6}>
        <Grid container direction='row' wrap='wrap'>
          {links.map((link, i) => (
            <Grid key={i} item xs={6}>
              <Link to={link.path}>
                <Button
                  sx={{
                    padding: '1rem',
                    border: `3px solid ${theme.palette.common.black}`,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {link.text}
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StartPage