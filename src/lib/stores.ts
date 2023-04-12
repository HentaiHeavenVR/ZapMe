import { get, writable } from "svelte/store";
import type { Account, SessionToken } from "$types";
import type { Config } from "./api";

export const ApiConfigStore = writable<Config | null>(null);
export const AccountStore = writable<Account | null>(null);
export const SessionTokenStore = writable<SessionToken | null>(null);

export const IsAccountLoaded = () => get(AccountStore) !== null;
export const IsAuthenticated = () => get(SessionTokenStore) !== null;