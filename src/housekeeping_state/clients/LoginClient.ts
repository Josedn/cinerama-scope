export function fetchLogin(username: string, password: string) {
    return new Promise<{ data: string, error: string }>((resolve, reject) => {
        if (username === "jose") {
            setTimeout(() => resolve({ data: "randomtoken42069" + username + ":" + password, error: "" }), 500);
        } else if (username === "ex") {
            setTimeout(() => reject(new Error("Can't connect or something")), 500);
        } else {
            setTimeout(() => resolve({ data: "", error: "Wrong password" }), 500);
        }
    });
}
