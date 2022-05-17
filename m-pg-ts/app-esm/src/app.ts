// Zugriff eines ESM Modusl auf ESM (lib) => funcktioniert
import { sayHello } from "@nilshartmann/lib";

// Zugriff eines ESM Moduls auf CommonJS (lib-cjs) funktioniert

import { sayHelloToCommonJs } from "@nilshartmann/lib-cjs";

import { isEmpty } from "@nilshartmann/utils";

export function app() {
  console.log("app - sayHello", sayHello());
  console.log("app - hello cjs", sayHelloToCommonJs());
  console.log("app - isEmpty from hybrid package", isEmpty("ss"));
}
