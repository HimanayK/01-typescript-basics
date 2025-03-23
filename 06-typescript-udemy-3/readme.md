## 19. Creating an NPM Package
- Open Terminal
  - **mkdir fileName**  // create folder
  - **cd fileName**     // change directory
  - **npm init -y**     // initialize a new package.json 
  - **npm i typescript -D**    //  install the TypeScript compiler with npm TypeScript and save it as a dev dependency
  - **npx tsc --init --rootDir src --outDir lib --sourceMap --declaration --declarationMap**    //  initialize config.json; enable sourceMap to debug the source code; enable declarations so that the compiler generates type definitions which can be used by our TypeScript consumers; enable declarationMap which allows our TypeScript consumers to navigate from the type definitions to the TypeScript source code

- Create src folder
   - inside src create index.ts file
- in package.json 
  - "main": "lib",
    "types": "lib",

    "scripts": {
   "build": "tsc"
  },   

- **npm run build**   
- **npm publish**
- where ever you want to use NPM package write npm i fileName in terminal, also import the file
 - import { functionName } from 'palind';