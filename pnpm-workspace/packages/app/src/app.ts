import { sayHello } from "@nilshartmann/lib";
import { sayHelloToUtils } from "@nilshartmann/utils";

export function app() {
  console.log("app - sayHello", sayHello());
  console.log("app - sayHelloToUtils", sayHelloToUtils());
}
