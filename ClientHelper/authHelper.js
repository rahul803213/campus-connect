import React from "react";

export const setTokenInLocal= token => {
    localStorage.setItem("jwtToken",token);
}

export const logout = () => {
    
}