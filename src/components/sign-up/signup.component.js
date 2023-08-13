import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/firebase.utils";

const defaultFormFeild = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const [formFeild, setFormFeild] = useState(defaultFormFeild);
  const { displayName, email, password, confirmPassword } = formFeild;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formFeild, [name]: value });
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFeild;
    if (password !== confirmPassword) {
      alert("Password doesnt match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(user, { displayName });

      setFormFeild(defaultFormFeild);
      alert("Signed up an account");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user Email already in use");
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
                Sign Up
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={onHandleSubmit}
              >
                <div>
                  <label
                    for="displayName"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Display Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="displayName"
                    value={displayName}
                    id="name"
                    className="block w-full  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900    focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                    placeholder="Ahmed Anwer"
                    required
                  />
                </div>

                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    value={email}
                    name="email"
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
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900    focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    for="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900    focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Create An Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
