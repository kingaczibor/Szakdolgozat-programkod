# Szakdolgozat-programkod
A mappában a BSc Szakdolgozatom keretein belül fejlesztett webes alkalmazás teljes programkódja érhető el.

A következő fájl a rendszer telepítésének lépéseit írja le Windows operációs rendszerek esetén.

Szükség van telepíteni a következőket:
-Python 3.11
(Az alábbi linken megtehető mindez: https://www.python.org/downloads/release/python-3110/)
-Node.js 18 (LTS)
(Link: https://nodejs.org/en/download)

Hogy a frontend projekt yarn csomagkezelője megfelelően működjön két parancsot kell kiadni egy adminisztrátorként megnyitott terminálban:
1. corepack enable
2. yarn set version stable

Mindezek után a projekt főkönyvtárából nyitunk egy terminált, majd a lépések a következőek:
1. létrehozunk egy virtuális környezetet a következő paranccsal: python -m venv env
Ezt csak egyszer kell lefuttatni.
2. aktiváljuk a létrehozott virtuális környezetet: .\env\Scripts\activate
Erre szükség van minden alkalommal, amikor indítani szeretnénk a rendszert
3. telepítjük a szükséges csomagokat: pip install -r requirements.txt
Ennek újbóli futtatására akkor van szükség, ha a projektben használt csomagok megváltoznak.
4. létrehozunk egy migrációt: python manage.py migrate
A parancsot csak az első alkalommal kell lefuttatni, ha csak nem történik a továbbiakban a modellben változás. Ha valamit változtatunk, a python manage.py makemigrations parancs futtatása szükséges, ezt követve a 4. pont migrációs parancsával.
5. Már csak a szerver indítása szükséges: python manage.py runserver

Miután ezeket végrehajtottuk, a főkönyvtárból átlépünk a frontend nevű mappába, ahonnan indítunk egy újabb terminált.
1. telepítjük a szükséges csomagokat: yarn
2. elindítjuk a frontendet: yarn vite
3. a böngészőben megnyitjuk az URL-t (alapértelmezetten localhost:5173)
