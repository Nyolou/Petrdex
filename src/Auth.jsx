// src/Auth.jsx
import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [user] = useAuthState(auth);
  const [errorMsg, setErrorMsg] = useState(""); // NEW: store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(""); // Clear previous errors

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      // More descriptive error handling
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMsg("Invalid email format.");
          break;
        case "auth/user-not-found":
          setErrorMsg("No account found with this email.");
          break;
        case "auth/wrong-password":
          setErrorMsg("Incorrect password.");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("This email is already registered.");
          break;
        case "auth/weak-password":
          setErrorMsg("Password should be at least 6 characters.");
          break;
        case "auth/invalid-credential":
          setErrorMsg("Invalid credentials. Please check your email and password.");
          break;
        default:
          setErrorMsg(error.message);
      }
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (user) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl mb-4">Welcome, {user.email}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* NEW: Display error messages */}
        {errorMsg && (
          <p className="text-red-500 text-sm mt-2 text-center">{errorMsg}</p>
        )}

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-blue-500 mt-4 cursor-pointer text-center"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </p>
      </div>
    </div>
  );
}
