import React, { useEffect, useState } from "react";

const useWindow = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("click", () => {
      setWidth(window.innerWidth);
    });

    return window.removeEventListener("click", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
};

export default useWindow;
