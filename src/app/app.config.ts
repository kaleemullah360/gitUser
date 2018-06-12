import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

const envHost = "api.github.com"; // localPC
const envProto = "https://";


export class IAppConfig {
    apiEndpoint: string;
    apiDir: string;
};

export const AppConfig: IAppConfig = {
    apiEndpoint: envProto + envHost ,
    apiDir: "/",
};