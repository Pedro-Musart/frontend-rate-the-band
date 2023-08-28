import React, { useEffect, useState } from "react";

export function DelayedRender ({ delay, children }) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return shouldRender ? children : null;
  };

 