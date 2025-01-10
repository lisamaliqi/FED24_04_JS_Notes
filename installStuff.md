# Hur man laddar ner olika saker:

## Vite
Gå in i den mappen du vill lägga in din vite app i, ex: jag har en mapp som heter vite_playground. Jag ställer mig i vite_playground i min terminal och sedan skriver jag:

$ npm create vite@latest DITT-NAMN-PÅ-FILEN --template vanilla-ts

Detta skapar en ny mapp i min vite_playground som får det namnet jag döper den till
i detta exemplet så skrev jag "vanilla" i slutet vilket gör att det är vanilla (inte react)
jag skrev också-ts vilket betyder att de filerna jag får är i typescript, här kan jag även välja javascript

Efter man gjort detta så går man in till den nya mappen med cd MAPPENSNAMN
sedan skriver man i terminalen:

$ npm install

vänta och låt allt installeras, sedan skriver du:

$ npm run dev

detta kommer du behöva göra varje gång du vill öppna din app i webbläsaren, när du skriver npm run dev så får du upp en http adress till en local host som du kan kopiera och klistra in i din webbläsare för att sedan kunna se hela projektet.

Klart!
