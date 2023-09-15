"use client";
import { auth } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Nav from "../../components/Nav";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthProvider, useAuth } from "../context/Context";
import { setCurrentUsers } from "../context/Context";

function SignUp() {
  const customId = "custom-id-yes";
  const status = (data) =>
    toast.info(data, {
      toastId: customId,
    });
  // const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // function handleSignup(e) {
  //   e.preventDefault();

  //   signup(email, password, (user) => {
  //     // Set the user in the AuthProvider

  //     console.log("User signed up:", user);
  //   });
  // }

  const signin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      status("Success");
      setLoading(false);
      await sendEmailVerification(userCredential.user);
      const user = userCredential.user;
      setCurrentUsers(user);
      setTimeout(() => {
        window.location.href = "/profile";
      }, 200);
    } catch (error) {
      status(`failed ${error}`);
      setLoading(false);
    }
  };
  const [view, setView] = useState(false);
  return (
    <AuthProvider>
      <Nav user={user} />
      <div className="h-[90vh] w-[100%] flex items-center justify-center">
        <Card color="transparent" shadow={true} className="p-8">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={signin}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <Input
                size="lg"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type={view ? "text" : "password"}
                size="lg"
                label="Password"
                icon={
                  view ? (
                    <BsEye
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="cursor-pointer"
                      onClick={() => setView(!view)}
                    />
                  )
                }
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Checkbox
              required={true}
              checked={true}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="/legal"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" disabled={loading} type="submit" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
      <ToastContainer autoClose={1000} />
    </AuthProvider>
  );
}
export default SignUp;
export const user = auth?.currentUser;
