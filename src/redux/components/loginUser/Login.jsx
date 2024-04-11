import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/user.action";
import swal from "sweetalert";

export const LoginUser = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const login = useSelector((state) => {    
    return state?.UserReducer?.login;
  });

  if (login) {
    console.log({ login });
    navigate("/albums");
  }

  //Work in progress message.
  useEffect(() => {
    if (!login) {
      swal({
        title: "Work in progress!",
        text: "Hi there. Welcome to Postgram demo project. Work is in progress. Please click on Start App button to start app.",
        button: {
          text: "Start App",
        },
      }).then(() => {
        dispatch(
          loginUser({
            email: "admin.test@mailinator.com",
            password: "Password@123",
          })
        );
        navigate("/login");
      });
    }
  }, [login]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      console.log(email, password);
      dispatch(loginUser({ email, password }));
      navigate("/login");
    },
  });

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="h-50 w-50 rounded-3 border border-dark p-5">
        <form onSubmit={formik.handleSubmit}>
          <h3>Login</h3>

          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik?.values?.email}
              className="form-control mt-4"
              placeholder="Email"
            />
          </div>

          <div className="form-group mt-4">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik?.values?.password}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="d-flex justify-content-left align-items-left">
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
            <label className="ms-1">Show Password</label>
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block mt-4">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};
