"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabase/supabaseClient";
import { useUserStore } from "../../lib/zustand/store";

export default function AuthPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { user, setUser } = useUserStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        setErr(error.message);
        return;
      }
      if (data.user) {
        const user = data.user;
        setUser({
          userId: user.id,
          email: user.email ?? "",
          username: user.user_metadata?.username ?? "",
          avatarUrl: user.user_metadata?.avatar_url ?? "",
        });
      }
    } catch (error) {
      setErr(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        setErr(error.message);
        return;
      }

      if (data.user) {
        const user = data.user;
        setUser({
          userId: user.id,
          email: user.email ?? "",
          username: user.user_metadata?.username ?? "",
          avatarUrl: user.user_metadata?.avatar_url ?? "",
        });
      }
    } catch (error) {
      setErr(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setErr(null);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setErr(error instanceof Error ? error.message : String(error));
      return;
    }

  };
  const handleFacebookAuth = async () => {
    setLoading(true);
    setErr(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setErr(error instanceof Error ? error.message : String(error));
      return;
    }
  };
  const handleDiscordAuth = async () => {
        setLoading(true);
    setErr(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setErr(error instanceof Error ? error.message : String(error));
      return;
    }
  };

  return (
    <div className="font-sans relative flex min-h-screen w-full flex-col overflow-hidden bg-(--color-bg) font-display text-(--color-text-primary)">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, var(--color-primary) 0%, transparent 40%)",
        }}
      ></div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-(--color-border-dark) bg-(--color-surface-dark)/80 backdrop-blur-md px-10 py-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 text-(--color-primary)">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-(--color-text-primary) text-xl font-bold leading-tight tracking-[-0.015em]">
            KeepIt
          </h2>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-9">
          <a
            className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            Docs
          </a>
          <a
            className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            How it works
          </a>
          <a
            className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors text-sm font-medium leading-normal"
            href="#"
          >
            Features
          </a>
        </nav>
        <div className="flex gap-3 w-30 justify-end"></div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-120 flex flex-col gap-6">
          {/* Card */}
          <div className="flex flex-col rounded-xl bg-(--color-surface-dark) border border-(--color-border-dark) p-8 shadow-2xl">
            <div className="flex flex-col gap-2 mb-8 text-center">
              <h1 className="text-(--color-text-primary) text-3xl font-black leading-tight tracking-[-0.02em]">
                Welcome Back
              </h1>
              <p className="text-(--color-text-secondary) text-sm font-normal">
                Enter your details to access your knowledge base
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
              {/* Email */}
              <label className="flex flex-col gap-2">
                <span className="text-(--color-text-primary) text-sm font-medium">
                  Email
                </span>
                <div className="relative group">
                  <input
                    className="w-full rounded-lg bg-(--color-input-bg)
                     border border-(--color-input-border) text-(--color-input-text)
                      px-4 h-12 text-sm focus:border-primary 
                      focus:ring-1 focus:ring-(--color-primary)
                       focus:outline-none transition-all "
                    placeholder="name@example.com"
                    type="email"
                    onChange={handleEmailChange}
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-(--color-text-secondary) pointer-events-none group-focus-within:text-(--color-primary) transition-colors text-[20px]">
                    mail
                  </span>
                </div>
              </label>

              {/* Password */}
              <label className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-(--color-text-primary) text-sm font-medium">
                    Password
                  </span>
                  <a
                    className="text-xs font-medium text-(--color-primary) hover:text-(--color-primary-hover) transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <input
                    className="w-full rounded-lg bg-(--color-input-bg)
                     border border-(--color-input-border) text-(--color-input-text)
                      px-4 h-12 text-sm focus:border-primary 
                      focus:ring-1 focus:ring-(--color-primary)
                       focus:outline-none transition-all "
                    placeholder="Spongebob123"
                    type="password"
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-(--color-text-secondary) hover:text-(--color-text-primary) cursor-pointer transition-colors text-[20px]"
                  >
                    visibility_off
                  </button>
                </div>
              </label>

              {/* Login Button */}
              <button
                className="mt-2 flex w-full items-center justify-center 
              rounded-lg bg-(--color-button-bg) hover:bg-(--color-button-hover) 
              h-12 px-6 text-(--color-button-text) text-base font-bold transition-all
               transform active:scale-[0.98]"
                onClick={() => {
                  isLogin ? handleLogin() : handleSignUp();
                }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex py-6 items-center">
              <div className="grow border-t border-(--color-border-dark)"></div>
              <span className="shrink-0 mx-4 text-(--color-text-secondary) text-xs font-medium uppercase tracking-wider">
                Or continue with
              </span>
              <div className="grow border-t border-(--color-border-dark)"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleGoogleAuth}
                className="flex items-center justify-center h-12 rounded-lg bg-(--color-input-bg) border border-(--color-input-border) hover:bg-(--color-border-dark) hover:border-(--color-text-secondary)/50 transition-all group"
              >
                <img src="/svg/google.svg" alt="" className="w-8 h-8" />
              </button>
              <button
                onClick={handleFacebookAuth}
                className="flex items-center justify-center h-12 rounded-lg bg-(--color-input-bg) border border-(--color-input-border) hover:bg-(--color-border-dark) hover:border-(--color-text-secondary)/50 transition-all group"
              >
                <img src="/svg/facebook.svg" alt="" className="w-10 h-10" />
              </button>
              <button
                onClick={handleDiscordAuth}
                className="flex items-center justify-center h-12 rounded-lg bg-(--color-input-bg) border border-(--color-input-border) hover:bg-(--color-border-dark) hover:border-(--color-text-secondary)/50 transition-all group"
              >
                <img src="/svg/discord.svg" alt="" className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-(--color-text-secondary) text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <a
                className="text-(--color-text-primary) font-bold hover:text-(--color-primary) transition-colors ml-1"
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-(--color-text-secondary)/40 text-xs">
          © 2024 KeepIt Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
