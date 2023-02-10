// Stores.ts, svelte stores for application state

import { writable } from "svelte/store";
import type { User } from "./models";
import type SessionInfo from "./models/SessionInfo";

export const ThemeStore = writable<string | null>(null);
export const SessionStore = writable<SessionInfo | null>(null);
export const IsAuthenticatedStore = writable<boolean>(false);
export const UserStore = writable<User | null>(null);
