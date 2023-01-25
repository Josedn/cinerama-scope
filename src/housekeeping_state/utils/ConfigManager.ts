import dotenv from "dotenv";
import { ConfigKeys } from "./ConfigKeys";

class ConfigManager {
    constructor() {
        const result = dotenv.config();
        if (result.error) {
            console.log("Error loading .env file: " + result.error.message);
        }
    }

    getCineStreamApiUrl() {
        return this.getString(ConfigKeys.REACT_APP_CINE_STREAM_API_URL, "http://localhost/");
    }

    getCineStreamApiKey() {
        return this.getString(ConfigKeys.REACT_APP_CINE_STREAM_API_URL, "default-api-key");
    }

    getUseMocks() {
        return this.getBoolean(ConfigKeys.REACT_APP_USE_MOCKS, false);
    }

    private getBoolean(key: ConfigKeys, failsafe: boolean): boolean {
        const value = process.env[key];
        if (value != null) {
            return value === "true";
        }
        return failsafe;
    }

    private getInt(key: ConfigKeys, failsafe: number): number {
        const value = process.env[key];
        if (value != null) {
            return parseInt(value);
        }
        return failsafe;
    }

    private getString(key: ConfigKeys, failsafe: string): string {
        const value = process.env[key];
        if (value != null) {
            return value;
        }
        return failsafe;
    }
}

const instance = new ConfigManager();
export default instance;