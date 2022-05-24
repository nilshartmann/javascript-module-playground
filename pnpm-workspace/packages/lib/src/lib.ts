import { sayHelloToUtils } from "@nilshartmann/utils";

export function sayHello(): string {
  console.log("I'm Hello! from Lib Version 2.0");
  sayHelloToUtils();
  console.log("---------------------");
  return "Hello from Lib Version 2.0";
}
