import React from "react";
import { useState, useEffect } from "react";


export function useWindowDimensions() {

   
     function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height} = window;
      return {width, height}
   }

   const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
   )

   const [isMobile, setIsMobile] = React.useState(false);
   const [isTab, setIsTab] = React.useState(false);

   useEffect(() => {
      function handleResize(){
      setWindowDimensions(getWindowDimensions());
   }
   
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      setIsTab(windowDimensions.width < 991 ? true: false);
      setIsMobile(windowDimensions.width < 400 ? true: false);
    }, [windowDimensions]);

    return {isTab,isMobile}
  
}