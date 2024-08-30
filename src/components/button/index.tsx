import React from "react";
import "./button.css";

interface Props {
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default function Button({ type, onClick, children }: Props) {
    return (
        <button 
            type={type}
            className="button"
            onClick={onClick}
        >
            {children}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}