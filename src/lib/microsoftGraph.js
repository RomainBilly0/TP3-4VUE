import * as msal from '@azure/msal-browser'

const requestedScopes = {
    scopes: ["User.Read"]
}

const msalConfig = {
    auth: {
        clientId: process.env.VUE_APP_OAUTH_CLIENT_ID,
        authority: "https://login.microsoftonline.com/common",
        redirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    }
}

const msalInstance = new msal.PublicClientApplication(msalConfig)

async function initializeMsal() {
    try {
        await msalInstance.initialize();
    } catch (error) {
        console.error("MSAL Initialization failed:", error);
    }
}

const account = msalInstance.getAllAccounts()[0];
if (account) {
    msalInstance.setActiveAccount(account);
}

export async function signInAndGetUser () {
    try {
        await initializeMsal();

        let activeAccount = msalInstance.getActiveAccount();
        if (!activeAccount) {
            const authResult = await msalInstance.loginPopup({
                ...requestedScopes,
                prompt: "select_account" // We want to be able to select the account so we request a specific page "request account"
            });
            msalInstance.setActiveAccount(authResult.account);
            activeAccount = authResult.account;
        }
        return activeAccount;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
}
