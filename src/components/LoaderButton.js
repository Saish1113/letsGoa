import React from "react";
import { Button,Glyphicon } from "react-bootstrap";
//import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import "./LoaderButton.css";

export default ({
                    isLoading,
                    text,
                    loadingText,
                    className = "",
                    disabled = false,
                    ...props
                }) =>
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading}
        {!isLoading ? text : loadingText}
    </Button>;