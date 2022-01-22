import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect } from 'react';
import theme from 'themes/main';
import { RegisterTextField, StyledButton, Wrapper } from './styled';

import { TComponents } from './types';

import { useDispatch, useSelector } from 'react-redux';
import {
  setAllFieldsCorrectState,
  setCheckboxStatus,
  setFieldByKey,
} from './slice/state';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link, useNavigate } from 'react-router-dom';

import { createProfile } from './slice/thunks';
import { RootState } from 'src/scripts/app/rootReducer';



const CreateProfilePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isHD = useMediaQuery(theme.breakpoints.down('xl'), {
    defaultMatches: true,
  });
  const isLowerLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  const { fieldsStatus, isCheckboxChecked, fields } = useSelector(
    (state: RootState) => state.createProfile.stateSlice
  );

  const { apiStatus } = useSelector(
    (state: RootState) => state.createProfile.createRequest
  );

  useEffect(() => {
    console.log(apiStatus)
    if (apiStatus === 'Success') {
      navigate(`/login`);
    }
  }, [apiStatus]);

  const finish = () => {
    console.table(fields);
    const status =
      isCheckboxChecked &&
      components.every((compKey) => {
        if (inputFields[compKey].isStrict) {
          return fields[compKey].isCorrect;
        }
        return true;
      });

    dispatch(setAllFieldsCorrectState(status ? 'correct' : 'noncorret'));

    if (!status) {
      return;
    }
    dispatch(
      createProfile({
        avatarURL: null,
        id: 1,
        name: `${fields.lastName.value} ${fields.firstName.value} ${fields.middleName.value}`,
        description: 'Учусь где-то'

        // phone: fields.phone.value,

      })
    );
  };

  const components: (keyof TComponents)[] = React.useMemo(() => [
    'firstName',
    'lastName',
    'middleName',
    'phone',
    'email',
  ], [])

  const inputFields: TComponents = React.useMemo(
    () => ({
      firstName: {
        fieldName: 'Имя',
        isStrict: true,
      },

      lastName: {
        fieldName: 'Фамилия',
        isStrict: true,
      },

      middleName: {
        fieldName: 'Отчество',
        isStrict: false,
      },

      phone: {
        fieldName: 'Телефон',
        isStrict: false,
        type: 'tel',
        component: (

        )
      },

      email: {
        fieldName: 'Email',
        isStrict: true,
        placeholder: 'example@mdinc.ru',
        type: 'email',
      },
    })
    ,
    [fields]
  );
  return (
    <>
      <Wrapper overflow="auto" marginTop={isPhone ? 10 : 0}>
        <Grid
          container
          justifyContent="center"
          p={`${theme.spacing(2)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`}
          wrap="nowrap"
          marginBottom={isLowerLg ? 6 : 0}
        >
          <Grid item xs={10} sm={8} md={6} lg={7}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4">Добавить профиль</Typography>
              </Grid>

              <Grid item>
                <Grid
                  container
                  columnSpacing={10}
                  rowSpacing={isHD ? 1.5 : 3}
                >
                  {components.map((compKey, i) => {
                    const inputField = inputFields[compKey]
                    return (
                      <Grid
                        key={i}
                        item
                        container
                        xs={12}
                        lg={6}
                        direction="column"
                        wrap="nowrap"
                        spacing={1.2}
                      >
                        <Grid item>
                          <Typography
                            variant="body2"
                            component="span"
                            fontWeight="fontWeightMedium"
                          >
                            {inputField.fieldName}
                          </Typography>
                          {inputField.isStrict && (
                            <Typography
                              variant="body2"
                              component="span"
                              fontWeight="fontWeightMedium"
                              color="primary.main"
                            >
                              *
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          {inputField.component
                            ? (inputField.component)
                            : (
                              <RegisterTextField
                                value={fields[compKey].value}
                                filled={fields[compKey].isCorrect}
                                aria-label="input"
                                placeholder={
                                  inputField.placeholder ? inputField.placeholder : ''
                                }
                                type={inputField.type ? inputField.type : ''}
                                onChange={(e) => {
                                  if (e.target.value) {
                                    dispatch(
                                      setFieldByKey({
                                        answer: {
                                          value: e.target.value,
                                          isCorrect: true, //TODO: Change to validate func
                                        },
                                        key: compKey,
                                      })
                                    );
                                  } else {
                                    dispatch(
                                      setFieldByKey({
                                        answer: {
                                          value: '',
                                          isCorrect: false, //TODO: Change to validate func
                                        },
                                        key: compKey,
                                      })
                                    );
                                  }
                                }}
                              />
                            )}
                        </Grid>
                      </Grid>
                    )
                  })}

                  <Grid
                    item
                    container
                    xs={12}
                    lg={6}
                    direction="column"
                    wrap="nowrap"
                    spacing={1.2}
                    marginTop={2}
                  >
                    <Grid item>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ paddingTop: 0 }}
                              onChange={(e) =>
                                dispatch(setCheckboxStatus(e.target.checked))
                              }
                            />
                          }
                          sx={{ alignItems: 'flex-start' }}
                          label={
                            <>
                              <Typography
                                variant="body2"
                                component="span"
                                fontWeight="fontWeightRegular"
                              >
                                Я принимаю условия
                              </Typography>
                              <Typography
                                variant="body2"
                                component="span"
                                fontWeight="fontWeightMedium"
                                color="primary.main"
                              >
                                {' '}
                                Пользовательского соглашения
                              </Typography>
                              <Typography
                                variant="body2"
                                component="span"
                                fontWeight="fontWeightRegular"
                              >
                                {' '}
                                и даю согласие на
                              </Typography>
                              <Typography
                                variant="body2"
                                component="span"
                                fontWeight="fontWeightMedium"
                                color="primary.main"
                              >
                                {' '}
                                Обработку моей персональной информации
                              </Typography>
                            </>
                          }
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    lg={6}
                    direction="column"
                    wrap="nowrap"
                    spacing={1.2}
                    marginTop={2}
                  >
                    <Grid item>
                      <StyledButton
                        variant="contained"
                        onClick={() => {
                          console.log('clicked!');
                          finish();
                        }}
                      >
                        <Grid container justifyContent="space-between">
                          <Grid item display="flex" alignItems="center">
                            <Typography variant="caption">
                              Создать профиль
                            </Typography>
                          </Grid>

                          <Grid item>
                            <ChevronRightRoundedIcon
                              sx={{ color: 'white' /* '#b1b1b1' */ }}
                            />
                          </Grid>
                        </Grid>
                      </StyledButton>
                    </Grid>
                    <Grid
                      item
                      visibility={
                        fieldsStatus === 'noncorret' || apiStatus == 'Failed'
                          ? 'visible'
                          : 'hidden'
                      }
                    >
                      <Typography
                        variant="body2"
                        width="80%"
                        margin="auto"
                        color="warning.main"
                      >
                        {apiStatus == 'Failed'
                          ? 'Произошла ошибка при создании профиля. Пожалуйста попробуйте позже'
                          : `Не все поля заполнены или заполены некоректно.
                            Убедитесь в правильности и попробуйте ещё раз`}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="span"
                      color="#757575"
                    >
                      Уже зарегистрированы?
                    </Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="body2"
                        component="span"
                        color="primary.main"
                      >
                        {' '}
                        Войти в аккаунт
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default CreateProfilePage;
