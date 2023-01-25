import { SyntheticEvent, useEffect } from "react";
import { useAppDispatch } from "../../../housekeeping_state/hooks";
import { logOut } from "../../../housekeeping_state/reducers/loginSlice";
import RequireNotLoginRedirector from "../../containers/RequireNotLoginRedirector";
import "./HomePage.scss";

export default function HomePage() {
    useEffect(() => {
        document.title = 'Cinerama HK - Home';
    });
    const dispatch = useAppDispatch();

    const onLogOut = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(logOut());
    };

    return (
        <>
            <RequireNotLoginRedirector />
            <div className="home-page">
                <div className="home-page__header">
                    <div className="home-page__header-column home-page__header-column--left">
                        <h2 className="header__title">Cinerama Housekeeping</h2>
                        <div className="header__text">
                            Logged as: <strong>rlvnc</strong>
                            <br />
                            Previous login at 19-09-2022 11:40pm from 127.0.0.1
                        </div>
                    </div>

                    <div className="home-page__header-column home-page__header-column--center">
                        <div className="header__text">
                            cinerama-stream 1.0.0
                            <br />
                            cinerama-api 1.0.0
                            <br />
                            cinerama-subs 1.0.0
                            <br />
                            online users: <strong>0</strong>
                        </div>
                    </div>

                    <div className="home-page__header-column home-page__header-column--right">
                        <a onClick={onLogOut} href="/">Log out</a>
                    </div>
                </div>
                <div className="home-page__separator" />
                <div className="home-page__wrapper">
                    <div className="home-page__navigator">
                        <div className="navigator__block">
                            <div className="navigator__header">
                                Main
                            </div>
                            <ul className="navigator__list">
                                <li className="navigator__list-item"><a href="/status">View status</a></li>
                                <li className="navigator__list-item navigator__list-item--selected"><a href="/request-movie">Request movie</a></li>
                                <li className="navigator__list-item"><a href="/status">View status</a></li>
                                <li className="navigator__list-item"><a href="/request-movie">Request movie</a></li>
                                <li className="navigator__list-item"><a href="/status">View status</a></li>
                                <li className="navigator__list-item"><a href="/request-movie">Request movie</a></li>
                            </ul>
                        </div>
                        <div className="navigator__block">
                            <div className="navigator__header">
                                Other
                            </div>
                            <ul className="navigator__list">
                                <li className="navigator__list-item"><a href="/status">View status</a></li>
                                <li className="navigator__list-item"><a href="/request-movie">Request movie</a></li>
                            </ul>
                        </div>
                        <div className="navigator__block">
                            <div className="navigator__header">
                                Something
                            </div>
                            <ul className="navigator__list">
                                <li className="navigator__list-item"><a href="/status">View status</a></li>
                                <li className="navigator__list-item"><a href="/request-movie">Request movie</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home-page__content">
                        <h1 className="content__title">Hello world</h1>
                        <p className="content__title">
                            Welcome to cinerama housekeeping
                        </p>
                    </div>
                </div>
                <div className="home-page_footer">
                    Copyright (c) 2022 - filmstock.tv
                </div>
            </div>
        </>
    );
}