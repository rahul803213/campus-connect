import React from "react";

export const setTokenInLocal= token => {

    sessionStorage.setItem("jwtToken",token);
}

export const getTokenFromLocal = () => {
    if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem("jwtToken") || 0;
      } else {
        return 0; // Handle the case when localStorage is not available
      }
}

export const removeTokenFromLocalMeansLogout = () => {
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem('userDetails');

}