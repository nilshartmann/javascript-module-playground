import { sayHelloToUtils } from "@nilshartmann/utils";

export function sayHello(): string {
  console.log("I'm Hello! from Lib Version 1.5");
  sayHelloToUtils();
  console.log("---------------------");
  return "Hello from Lib Version 1.5";
}
