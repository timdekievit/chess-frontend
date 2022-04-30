import { observer } from "mobx-react-lite";
import React from "react";
import LoginForm from "./users/LoginForm";

export default observer(function HomePage() {
    return (
        <>
            <p>home page werkt</p>

            <LoginForm />
        </>

    )
})
