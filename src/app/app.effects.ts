import { AuthEffects } from "./auth/effects";
import { GroupEffects } from "./group/effects";
import { TaskEffects } from "./task/effects/task.effects";
import { TemplateTaskEffects } from "./template-task/effects/template-task.effects";
import { UserEffects } from "./user/effects/user.effects";

export const EffectsArray: any[] = [
  AuthEffects,
  UserEffects,
  GroupEffects,
  TaskEffects,
  TemplateTaskEffects,
];