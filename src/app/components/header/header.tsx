import React from "react";

interface IProps {
  title: string;
}

const Header = ({ title }: IProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
