import { AuthEffects } from "./auth/effects";
import { GroupEffects } from "./group/effects";
import { UserEffects } from "./user/effects/user.effects";

export const EffectsArray: any[] = [
  AuthEffects,
  UserEffects,
  GroupEffects,
];