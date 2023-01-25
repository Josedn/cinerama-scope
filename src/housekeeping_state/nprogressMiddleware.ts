import { Middleware } from "@reduxjs/toolkit";
import nProgress from "nprogress";

let lastRequestId = "";

export const nprogressMiddleware: Middleware =
    ({ dispatch }) =>
        (next) =>
            (action): void => {
                next(action);
                const { meta } = action;
                if (meta?.requestId) {
                    if (meta.nprogress) {
                        lastRequestId = meta.requestId;
                        nProgress.start();
                    }
                    if (meta.requestStatus && lastRequestId === meta.requestId) {
                        switch (meta.requestStatus) {
                            case "fulfilled":
                            case "rejected":
                                nProgress.done();
                                break;
                        }
                    }
                }
            };