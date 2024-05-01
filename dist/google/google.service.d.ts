export declare class GoogleService {
    getNewAccessToken(refreshToken: string): Promise<string>;
    getProfile(token: string): Promise<import("axios").AxiosResponse<any, any>>;
    isTokenExpired(token: string): Promise<boolean>;
    revokeGoogleToken(token: string): Promise<void>;
}
