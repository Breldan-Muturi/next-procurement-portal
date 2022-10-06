import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormInput } from "../types";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockResetIcon from "@mui/icons-material/LockReset";
import Container from "@mui/material/Container";

export default function authenticate() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<string>("login");
  const [open, setOpen] = useState<Boolean>(false);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [authError, setAuthError] = useState<string>("");
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthFormInput> = async (data) => {
    if (authMode === "login") {
      setLoading(true);
      try {
        await Auth.signIn(data.username, data.password);
        router.push("/");
      } catch (error) {
        setAuthError(error.message);
        setOpen(true);
      } finally {
        setLoading(false);
      }
    }
    if (authMode === "register") {
      signUpWithEmailAndPassword(data);
    }
    if (authMode === "verify") {
      confirmSignUp(data);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  async function signUpWithEmailAndPassword(
    data: AuthFormInput
  ): Promise<CognitoUser> {
    const { username, email, password } = data;
    setLoading(true);
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setAuthMode("verify");
      return user;
    } catch (error) {
      setAuthError(error.message);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  async function confirmSignUp(data: AuthFormInput) {
    const { username, password, code } = data;
    setLoading(true);
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      if (amplifyUser) {
        router.push("/");
      } else {
        setAuthError("Something went wrong signing you in");
      }
    } catch (error) {
      setAuthError(error.message);
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {authMode === "login" && <LockOutlinedIcon />}
          {authMode === "register" && <PersonAddIcon />}
          {authMode === "verify" && <AdminPanelSettingsIcon />}
          {authMode === "forgot" && <EmailIcon />}
          {authMode === "reset" && <LockResetIcon />}
        </Avatar>
        <Typography component="h1" variant="h5">
          {authMode === "login" && "Sign In"}
          {authMode === "register" && "Register"}
          {authMode === "verify" && "Verify Account"}
          {authMode === "forgot" && "Forgot Password"}
          {authMode === "reset" && "Reset password"}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grow in={Boolean(open)} {...(open ? { timeout: 1000 } : {})}>
            <Alert onClose={handleClose} severity="error">
              {authError}
            </Alert>
          </Grow>
          {authMode !== "verify" && authMode !== "reset" && (
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              error={errors.username ? true : false}
              helperText={
                errors.username
                  ? errors.username.message
                  : "Enter a username between 6 to 12 characters long"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle
                      color={errors.username ? "error" : "inherit"}
                      fontSize="small"
                    />
                  </InputAdornment>
                ),
              }}
              {...register("username", {
                required: {
                  value: true,
                  message: "Please enter a username.",
                },
                minLength: {
                  value: 3,
                  message: "Please enter a username between 3-16 characters.",
                },
                maxLength: {
                  value: 16,
                  message: "Please enter a username between 3-16 characters.",
                },
              })}
            />
          )}
          {authMode === "register" && (
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={errors.email ? true : false}
              helperText={
                errors.email
                  ? errors.email.message
                  : "Enter a valid email address"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon
                      fontSize="small"
                      color={errors.email ? "error" : "inherit"}
                    />
                  </InputAdornment>
                ),
              }}
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email.",
                },
              })}
            />
          )}
          {authMode !== "forgot" && authMode !== "verify" && (
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth
              name="password"
              label={authMode === "reset" ? "New Password" : "Password"}
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              error={errors.password ? true : false}
              helperText={
                errors.password
                  ? errors.password.message
                  : "Enter a strong password with more than 8 characters"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? (
                      <VisibilityOffIcon
                        color={errors.password ? "error" : "inherit"}
                        fontSize="small"
                        cursor="pointer"
                      />
                    ) : (
                      <VisibilityIcon
                        color={errors.password ? "error" : "inherit"}
                        fontSize="small"
                        cursor="pointer"
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter a password.",
                },
                minLength: {
                  value: 8,
                  message: "Please enter a stronger password.",
                },
              })}
            />
          )}
          {(authMode === "register" || authMode === "reset") && (
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              autoComplete="current-password"
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword
                  ? errors.confirmPassword.message
                  : "Re-enter your password to confirm"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? (
                      <VisibilityOffIcon
                        color={errors.confirmPassword ? "error" : "inherit"}
                        fontSize="small"
                        cursor="pointer"
                      />
                    ) : (
                      <VisibilityIcon
                        color={errors.confirmPassword ? "error" : "inherit"}
                        fontSize="small"
                        cursor="pointer"
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === getValues("password") ||
                  "Your passwords do not match",
              })}
            />
          )}
          {authMode === "verify" && (
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth
              id="code"
              label="Verification Code"
              name="code"
              autoComplete="one-time-code"
              autoFocus
              error={errors.code ? true : false}
              helperText={
                errors.code
                  ? errors.code.message
                  : "Enter the verification code sent to your email"
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle
                      color={errors.code ? "error" : "inherit"}
                      fontSize="small"
                    />
                  </InputAdornment>
                ),
              }}
              {...register("code", {
                required: {
                  value: true,
                  message: "Adding a valid code is required.",
                },
                minLength: {
                  value: 6,
                  message: "Your verification should be 6 characters long.",
                },
                maxLength: {
                  value: 6,
                  message: "Your verification should be 6 characters long.",
                },
              })}
            />
          )}
          {(authMode === "login" || authMode === "verify") && (
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Stay logged in"
            />
          )}
          <LoadingButton
            loading={Boolean(loading)}
            loadingPosition="start"
            startIcon={
              (authMode === "login" && <LockOutlinedIcon fontSize="small" />) ||
              (authMode === "register" && <PersonAddIcon fontSize="small" />) ||
              (authMode === "verify" && (
                <AdminPanelSettingsIcon fontSize="small" />
              )) ||
              (authMode === "forgot" && <EmailIcon fontSize="small" />) ||
              (authMode === "reset" && <LockResetIcon fontSize="small" />)
            }
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {authMode === "login" &&
              (loading ? "Logging you in..." : "Login to your account")}
            {authMode === "register" &&
              (loading
                ? "Registering your account..."
                : "Create a new account")}
            {authMode === "verify" &&
              (loading ? "Verifying..." : "Verify your account")}
            {authMode === "forgot" &&
              (loading
                ? "Sending reset token..."
                : "Send password reset token")}
            {authMode === "reset" &&
              (loading ? "Resetting your password..." : "Reset your password")}
          </LoadingButton>
          <Grid container justifyContent="space-between" mb={2}>
            <Grid>
              <Link
                href="#"
                onClick={() => setAuthMode("forgot")}
                variant="body2"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid>
              <Link
                href="#"
                onClick={() =>
                  setAuthMode(authMode === "register" ? "login" : "register")
                }
                variant="body2"
              >
                {authMode === "register"
                  ? "Already have an account? Log in"
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
