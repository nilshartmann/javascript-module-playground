// app: ein CommonJS Modul

// funktioniert NICHT, weil lib ein ESM modul ist
//  und aus CommonJS nicht auf ESM zugegriffen werden kann
// import { sayHello } from "@nilshartmann/lib";

// funktioniert, weil lib-cjs ein CommonJS modul ist
import { sayHelloToCommonJs } from "@nilshartmann/lib-cjs";

// funktioniert, weil das explizite export
// in lib verwendet wird, das anzeigt,
// welche Datei verwendet werden soll, wenn
// per CommonJS/require das Modul verwendet wird
import { isEmpty } from "@nilshartmann/utils";

export function app() {
  console.log("app - sayHello", sayHelloToCommonJs());
  console.log("app - isEmpty", isEmpty("hurra!"));
}
