// ** React Imports
import env from '@beam-australia/react-env';
import { yupResolver } from '@hookform/resolvers/yup';
// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography, { TypographyProps } from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { isEmpty } from 'lodash';
import { NextPage } from 'next';
// ** Next Imports
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
// ** Third Party Imports
import * as yup from 'yup';

import Logo from '@/components/shared/Logo';
import { login, LoginParams, loginWithGoogle, LoginWithGoogleParams } from '@/services/auth';
import { ServerError } from '@/services/axios';

// ** Icon Imports
import Icon from './../../@core/components/icon';
import { useSettings } from './../../@core/hooks/useSettings';
// ** Layout Import
import BlankLayout from './../../@core/layouts/BlankLayout';
// ** Configs
import themeConfig from './../../configs/themeConfig';
// ** Hooks
// ** Demo Imports
import FooterIllustrationsV2 from './../../views/pages/auth/FooterIllustrationsV2';

// ** Styled Components
const LoginIllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10),
  },
}));

const LoginIllustration = styled('img')(({ theme }) => ({
  maxWidth: '48rem',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem',
  },
}));

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450,
  },
}));

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
  },
}));

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) },
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
  },
}));

const schema = yup.object().shape({
  identifier: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: '',
  identifier: '',
};

interface FormData {
  identifier: string;
  password: string;
}

const LoginPage: NextPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { mutateAsync: loginMutation } = useMutation<void, ServerError, LoginParams>(login);

  const { mutateAsync: loginWithGoogleMutation } = useMutation<void, ServerError, LoginWithGoogleParams>(
    loginWithGoogle
  );

  // ** Hooks
  const theme = useTheme();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));

  // ** Vars
  const { skin } = settings;

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async ({ identifier, password }: FormData) => {
    await loginMutation(
      { identifier, password },
      {
        onError: (error) => {
          toast.error(error.message);
          setError('identifier', {
            type: 'manual',
            message: error.message
          })
        },
        onSuccess:()=>{
          router.replace('/dashboard')
        }
      }
    );
  };

  const handleLoginWithGoogle = async (response: CredentialResponse) => {
    if (response.credential) {
      await loginWithGoogleMutation({ credential: response.credential }, { onError: handleLoginWithGoogleError });

    }
  };
  const handleLoginWithGoogleError = () => {
    toast("Please try logging in using email/password, or use another browser that supports Google's One Tap API.");
  };

  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration';

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <Box className="content-right">
      {!hidden ? (
        <Box sx={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <LoginIllustrationWrapper>
            <LoginIllustration
              alt="login-illustration"
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
          </LoginIllustrationWrapper>
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 7,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper',
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
               <Logo/>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant="h5">{`Welcome to ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant="body2">Please sign-in to your account and start the adventure</Typography>
            </Box>
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="identifier"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label="identifier"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.identifier)}
                      placeholder="admin@materialize.com"
                    />
                  )}
                />
                {errors.identifier && <FormHelperText sx={{ color: 'error.main' }}>{errors.identifier.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor="auth-login-v2-password" error={Boolean(errors.password)}>
                  Password
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label="Password"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                <FormControlLabel
                  label="Remember Me"
                  control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                />
                <Typography
                  variant="body2"
                  component={Link}
                  href="/forgot-password"
                  sx={{ color: 'primary.main', textDecoration: 'none' }}
                >
                  Forgot Password?
                </Typography>
              </Box>
              <Button fullWidth size="large" type="submit" variant="contained" sx={{ mb: 7 }}>
                Login
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
                <Typography href="/register" component={Link} sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  Create an account
                </Typography>
              </Box>
              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: (theme) => `${theme.spacing(5)} !important`,
                  mb: (theme) => `${theme.spacing(7.5)} !important`,
                }}
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             {!isEmpty(env('GOOGLE_CLIENT_ID')) && (
                <GoogleLogin onSuccess={handleLoginWithGoogle} onError={handleLoginWithGoogleError} />
              )}
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;
