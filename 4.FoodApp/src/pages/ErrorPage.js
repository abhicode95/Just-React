import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>
        <i>{error.error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
