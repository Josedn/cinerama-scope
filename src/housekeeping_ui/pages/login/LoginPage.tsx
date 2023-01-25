import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../housekeeping_state/hooks";
import { loginAsync, selectErrorMessage } from "../../../housekeeping_state/reducers/loginSlice";
import RequireLoginRedirector from "../../containers/RequireLoginRedirector";
import "./LoginPage.scss";

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector(selectErrorMessage);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(loginAsync({ username, password }));
    };

    let errorContainer = <></>;
    if (errorMessage.length > 0) {
        errorContainer = (
            <div className="login-page__text login-page__text--error">
                {errorMessage}
            </div>
        );
    }

    return (
        <>
            <RequireLoginRedirector />
            <div className="login-page">
                <div className="login-page__column login-page__column--left">
                    <div className="login-box">
                        <div className="login-box__title">
                            Login
                        </div>
                        <form className="login-box__form" onSubmit={handleSubmit}>
                            <div className="input-section">
                                Username:
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="input-section__input"
                                    type="text">
                                </input>
                            </div>
                            <div className="input-section">
                                Password:
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-section__input"
                                    type="password">
                                </input>
                            </div>
                            <div className="input-section input-section--submit">
                                <button
                                    className="input-section__button">Login</button>
                            </div>
                        </form>
                    </div>
                    {errorContainer}
                    <div className="login-page__text">
                        Got a problem with the VPN Network? Please report it quickly to the Cinerama team!
                    </div>
                </div>
                <div className="login-page__column login-page__column--spacer"></div>

                <div className="login-page__column login-page__column--right information-box">
                    <h2 className="information-box__title">
                        Important information!
                    </h2>
                    <p className="information-box__text">
                        Actions which are performed in Housekeeping are 24 hours and 7 days per week logged.
                        <br /><br />
                        Please make sure you're connected with in the Cinerama VPN Network before you Log In.
                        <br /><br />
                        You are not a moderator or an administrator? Please click <a href="/">here</a> to return to Cinerama!
                    </p>
                </div>
            </div>
        </>
    );
}