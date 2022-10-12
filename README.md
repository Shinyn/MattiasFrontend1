# Boilerplate: individuell uppgift

Steg 1-5 nedan beskriver stegen för att sätta upp ett projekt lokalt och genomföra sin inlämning för att bli godkänd på gruppövningen.

Den individuella uppgiften, som alltså utgår från repot https://github.com/GitWebb22/Uppgift-f_stack-js är betygsgrundande och kan ge betygen IG, G och VG. Inlämning kan ske på svenska eller engelska.

## Setup

### Steg 1
Ladda ned det här repot genom att välja "use this template" och skapa ett eget, med ett eget namn.
Klona det till valfri katalog på din egen dator. Gå in i mappen och kör följande kommandon från terminalen.
(glöm inte att stå i rätt mapp). 
```
    npm install
    npm run init
    npm start
```

### Steg 2
Surfa till http://localhost:3000 och se om du får ut en lista med användare i konsollen
Pröva http://localhost:3000/api och kontrollera de olika endpointsen. Testa att hämta både .md filer och användare.

### Steg 3 lämna in .jsonfilen som skapats i inlämningsmappen i studentportalen
När ditt lokala repo fungerar är grupp uppgiften godkänd (för dig personligen, alla i gruppen ska lämna in sin egen fil).

### Steg 4
Uppgiften är att lösa problem med kod, samt dokumentera både problem och lösning.
Det problem som jag vill att alla börjar med är att använda den data som finns för att hitta lämpliga grupper att samarbeta i, ställa frågor till eller granska kod. 

### Steg 5
https://github.com/orgs/GitWebb22/frontend-1_data
Här finns ett repo där ni kan dela er personliga information, så att andra kan använda er som testpersoner. Byt inte namn på några filer så bör det inte uppstå några konflikter i users mappen.

## Beskrivning
Uppgiften består av tre moment. Problemformulering, lösning och dokumentation. 

### Problemformulering (dokumentera problem)
Formulera ett eller flera problem som du tänker lösa, med egna ord. Problemformuleringen får gärna bli teknisk, men ska utgå från en läsare som inte har några kunskaper om kod. Det går även bra att rikta sig till en läsare inom ett speciellt område (specialintressen, yrken, barn, eller vad som helst). Utgå från en potentiell läsare med minimala förkunskaper och förtydliga och fördjupa dig i det tekniska successivt. 

Det går bra att hålla sig till exemplet med att skapa upp grupper av studenter baserat på den data de (ni) själva lämnat ifrån er. En problemformulering skulle då kunna bestå av tre paragrafer text

1. Problemet beskrivet i allmänhet. Till en läsare som inte arbetar eller studerar på Nackademin.
2. De specifika förutsättningar och utmaningar som är utgångspunkten för den här lösningen.
3. Hur ni avser lösa problemet med kod. Det går även bra att argumentera för att problemet inte ska lösas med kod.

Använd www/dev/index.html som startpunk. Det går bra att skapa undersidor och länka dem. Alla sidor utgår från mappen "www/dev" och alla länkar kan göras relativa till den. Filer från data-mappen hämtas via api. Se exempel i script.js. Det behövs alltså bara en script.js om man vill återanvända den på alla sidor (det vill man förmodligen).
```
    www/dev
          |- index.html
          |- script.js
          |- example
             |-index.html
          |- about
             |-index.html
```
```html
    <a href="/">Start</a>
    <a href="/example/">Exempel</a>
    <a href="about">Info</a>
    ...
    <script src="/script.js"></script>
```

### Lös problemet
Skriv kod som löser problemet du formulerat ovan. Lösningen ska kunna demonstreras på index.html eller någon undersida genom att köra kod skriven i javascript. Utgå från script.js, men det går bra att skapa ytterligare filer, och att skriva javascript i script-taggar direkt på sidorna, om det fungerar bäst. Kommentera koden så att en kollega kan följa vad som händer när koden körs. Utgå från din egen kunskapsnivå när du skriver kommentarer. 

### Teknisk dokumentation
Byt ut filen README.md till en fil du skrivit själv. Syftet med den tekniska dokumentationen är att beskriva vad din kod gör, och hur en annan utvecklare kan göra för att använda din lösning. Utgå från din egen kunskapsnivå och försök inleda med en så kortfattad beskrivning som möjligt av problemet. Exempel:
_This code will create groups of users based on how compatible their respective zodiac-signs are._

Beskriv sedan vilka steg en utvecklare behöver gå igenom för att nå samma resultat, samt vilka delar (om några) som kan modifieras.

## Examination
Uppgiften lämnas in genom att examinatorn bjuds in till repot, samt att repot sparas som .zip-fil och lämnas in i studentportalen senast 19e oktober 2022, 23:59.


## Uppslag till alternativa problem att lösa
Om man inte vill fördjupa sig i gruppindelning går det bra att formulera ett eget problem och lösa det. Nedan finns några uppslag som man kan använda.
* Funktionen publishSecure i src/node/f_f_data/publish.js borde kunna användas till att skapa anonymiserad data. Kan man bygga ett gränssnitt för exemelvis kursutvärderingar med det?
* Går det att hacka filerna ovan, så att man kan ändra i dem utan att syns för upphovspersonen?
* Kan man använda teknik liknande highlight.js för att känna igen tekniska termer i exempelvis kursplanen?
* Kan man använda uppgifterna 1-18 och skapa ett sätt för studenter att slutföra uppgifterna och sedan be en annan student att granska sin lösning? Som ett sätt att hålla koll på hur man ligger till kunskapsmässigt.
