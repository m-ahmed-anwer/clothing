import React, { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase.utils";

import { useNavigate } from "react-router-dom";

const formFeild = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(formFeild);

  const { email, password } = data;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocumentFromAuth(response.user);
      }
    }

    fetchData();
  }, []);

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setData(formFeild);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (error.code === "auth/user-not-found") {
        alert("No user in this mail");
      } else {
        alert(error);
      }
    }
  };

  return (
    <>
      <section className="bg-gray-50 ">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow   sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
                Log In
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onHandleSubmit}
              >
                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    id="email"
                    className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900    focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900    focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Log In
                </button>
                <button
                  type="submit"
                  className="flex w-full items-center rounded-lg  bg-slate-100 px-5 py-2.5  text-center text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={signInWithGooglePopup}
                >
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                    width={30}
                    alt="google"
                    className="mr-3"
                  />
                  Continue with Google
                </button>

                <button
                  type="submit"
                  className="flex w-full items-center rounded-lg  bg-slate-100 px-5 py-2.5  text-center text-sm font-medium text-black hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={signInWithGoogleRedirect}
                >
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                    width={30}
                    alt="google"
                    className="mr-3"
                  />
                  Sign In with Google redirect
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
