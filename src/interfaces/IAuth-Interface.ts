export interface IAuthData {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  capabilities: string;
  accessToken: string;
  refreshToken?: string | undefined;
}

export interface IAuthErrorMessage {
  error: boolean;
  errorMessage: string;
}
