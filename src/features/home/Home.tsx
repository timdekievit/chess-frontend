import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./users/LoginForm";

export default observer(function HomePage() {
    return (
        <>
            <h1>Welkom op de homepage</h1>
            <Link to="/login" style={{padding: "2em"}}>login</Link>
            <Link to="/register">register</Link>
        </>

    )
})
