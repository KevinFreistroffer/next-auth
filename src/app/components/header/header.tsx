import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { publicRoutes } from "@/app/(public)/routes";

interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return (
    <header className={`${styles["header"]}`}>
      <h1>{title}</h1>
      <nav>
        <ul className="flex">
          {publicRoutes.map((route) => (
            <li key={route.route} className="mr-3">
              <Link href={route.route}>{route.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
