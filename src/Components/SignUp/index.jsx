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
import { Link } from "react-router-dom";
import { addUserAPI } from "./module/action";
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
    props.dispatch(addUserAPI(user, props.history));
    console.log(user);
  };

  const check = Yup.object().shape({
    taiKhoan: Yup.string()
      .required(" Tài khoản không được để trống !!")
      .min(5, "Tối thiểu có trên 5 kí tự"),
    matKhau: Yup.string()
      .required("Mật khẩu không được để trống !!")
      .min(5, "Tối thiểu có trên 5 kí tự"),
    email: Yup.string()
      .required("Email không được để trống")
      .email("Không đúng định dạng"),
    soDt: Yup.string()
      .required("Số Điện thoại không được để trống !!")
      .matches(/^[0-9]+$/, "Số điện thoại không đúng định dạng"),
  });

  return (
    <div className="SignUp">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng Ký
          </Typography>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP01",
              hoTen: "",
              maLoaiNguoiDung: "KhachHang",
            }}
            validationSchema={check}
            render={(envent) => (
              <Form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="taiKhoan"
                      name="taiKhoan"
                      variant="outlined"
                      required
                      fullWidth
                      id="taiKhoan"
                      label="Tài Khoản"
                      autoFocus
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="matKhau"
                      label="Mật Khẩu"
                      name="matKhau"
                      type="password"
                      autoComplete="matKhau"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      id="email"
                      autoComplete="current-password"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="hoTen"
                      name="hoTen"
                      variant="outlined"
                      required
                      fullWidth
                      id="hoTen"
                      label="Họ Tên"
                      autoFocus
                      onChange={envent.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="soDt"
                      label="Số Điện Thoại"
                      name="soDt"
                      autoComplete="soDt"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Đăng Ký
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="signin" variant="body2">
                      Bạn đã có tài khoản? Đăng Nhập
                    </Link>
                  </Grid>
                </Grid>
                <Link to="/">
                  <div className="close">
                    <i class="fas fa-times"></i>
                  </div>
                </Link>
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

export default connect()(SignIn);
