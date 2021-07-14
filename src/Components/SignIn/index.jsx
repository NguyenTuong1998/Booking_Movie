import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { fetchLogin } from "./module/action";
import {Link} from "react-router-dom";
// import FacebookLogin from "react-facebook-login";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {"Copyright © "} */}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function SignIn(props) {
  const classes = useStyles();

  const handleSubmit = (user) => {
    props.dispatch(fetchLogin(user, props.history));
    
  };

  const check = Yup.object().shape({
      taiKhoan: Yup.string()
        .required(" Tài khoản không được để trống !!")
        .min(5, "Tối thiểu có trên 5 kí tự"),
      matKhau: Yup.string()
        .required("Mật khẩu không được để trống !!")
        .min(5, "Tối thiểu có trên 5 kí tự"),
  })

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  // const componentClicked = (data) => {
  //   console.warn(data);
  // }

  return (
    <div className="SignIn">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            validationSchema={check}
            render={(envent) => (
              <Form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài Khoản"
                  name="taiKhoan"
                  autoComplete="taiKhoan"
                  autoFocus
                  onChange={envent.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="text text-danger">{msg}</div>}
                </ErrorMessage>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  id="matKhau"
                  autoComplete="current-password"
                  onChange={envent.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="text text-danger">{msg}</div>}
                </ErrorMessage>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ghi nhớ mật khẩu"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Đăng Nhập
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
                  </Grid>
                  <Grid item>
                    <Link to="signup" variant="body2">
                      {"Chưa có tài khoản? Đăng Ký"}
                    </Link>
                  </Grid>
                </Grid>
                <Link to="/">
                  <div className="close">
                    <i class="fas fa-times"></i>
                  </div>
                </Link>
                {/* <FacebookLogin
                  appId="1950201038478740"
                  autoLoad={true}
                  fields="name,email,picture"
                  // onClick={componentClicked}
                  callback={responseFacebook}
                /> */}
              </Form>
            )}
          />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}


export default connect() (SignIn);