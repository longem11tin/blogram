"use client";

import React, { useState } from "react";
import styles from "./authLink.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}

      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home page</Link>
          <Link href="/">News</Link>
          <Link href="/">About</Link>
          {status === "unauthenticated" ? (
            <Link href="/login" className=""> Login </Link>
          ) : (
            <>
              <Link href="/write" className=""> Write </Link>
              <span className="" onClick={signOut}> Logout </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
