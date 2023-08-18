import React from "react";

export const setTokenInLocal= token => {

    localStorage.setItem("jwtToken",token);
}

export const getTokenFromLocal = () => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem("jwtToken") || 0;
      } else {
        return 0; // Handle the case when localStorage is not available
      }
}

export const removeTokenFromLocalMeansLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem('userDetails');

}