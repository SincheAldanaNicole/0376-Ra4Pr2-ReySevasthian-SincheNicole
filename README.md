# Projecte Col·laboratiu — Git i GitHub
### 0376 - Implantació d'aplicacions Web
**Alumnes:** Rey Sevasthian — Sinche Aldana Nicole

---

## 1. Reconeix la utilitat de les aplicacions d'ofimàtica web

**1. Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**

Porque permite que varias personas trabajen en el mismo proyecto desde cualquier ordenador con internet, sin necesidad de enviarse archivos por correo o usar un USB. Todo el mundo puede ver los cambios que hace cada uno.

**2. Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d'un projecte només en un ordinador local?**

La principal ventaja es que si se rompe el ordenador no pierdes el trabajo porque está guardado en la nube. Además puedes acceder desde cualquier sitio y compartirlo fácilmente con otras personas.

**3. Com pot ajudar GitHub a gestionar versions d'un projecte web o d'una aplicació?**

GitHub guarda un historial de todos los cambios que has hecho, así que si en algún momento algo deja de funcionar puedes volver a una versión anterior que funcionaba bien.

**4. En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**

Es útil en cualquier proyecto donde haya código, como páginas web, aplicaciones o videojuegos. También cuando trabajan varias personas a la vez en el mismo proyecto.

**5. Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d'emmagatzematge de fitxers?**

Con un sistema tradicional como una carpeta o un USB solo tienes la última versión del archivo. Con Git tienes un historial completo de todos los cambios y puedes trabajar en diferentes versiones del proyecto a la vez.

---

## 2. Classifica segons la funcionalitat i prestacions específiques

**6. Explica quina és la diferència entre Git i GitHub.**

Git es el programa que instalas en tu ordenador para controlar las versiones de tu proyecto. GitHub es una página web donde puedes subir ese proyecto para tenerlo en la nube y compartirlo con otros.

**7. Quines funcionalitats ofereix GitHub a més del control de versions del codi?**

GitHub también tiene un sistema para reportar errores (issues), una herramienta para revisar código antes de fusionarlo (pull requests), y hasta puedes publicar páginas web directamente desde un repositorio.

**8. Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**

- **Repositoris:** Es como una carpeta donde se guarda todo el proyecto, con todos sus archivos y el historial de cambios.
- **Issues:** Son como anotaciones o tareas donde puedes reportar errores o proponer mejoras del proyecto.
- **Pull requests:** Es una petición para fusionar los cambios de una rama con otra, normalmente para que alguien los revise antes de aceptarlos.
- **GitHub Pages:** Es una funcionalidad que permite publicar una página web gratis directamente desde un repositorio de GitHub.

**9. Quina funció tenen les branques (branches) en Git?**

Las ramas permiten trabajar en una parte del proyecto sin tocar el código principal. Por ejemplo puedes crear una rama para añadir una nueva función y si algo sale mal no afecta al resto del proyecto.

**10. Per a què serveixen les pull requests en un projecte col·laboratiu?**

Sirven para que cuando alguien termina su parte del trabajo, otro miembro del equipo pueda revisarla antes de juntarla con el código principal. Así se evitan errores.

---

## 3. Gestiona els comptes d'usuari

**11. Què és un compte d'usuari a GitHub i per què és necessari per treballar amb repositoris remots?**

Es un perfil personal en GitHub que te identifica. Es necesaria para poder subir código, crear repositorios y colaborar con otras personas en proyectos.

**12. Quina diferència hi ha entre un repositori públic i un privat a GitHub?**

Un repositorio público lo puede ver cualquier persona en internet, aunque no pueda modificarlo. Uno privado solo lo pueden ver las personas que tú invites.

**13. Com es pot afegir un col·laborador a un repositori de GitHub?**

Desde los ajustes del repositorio hay una sección llamada "Collaborators" donde puedes buscar el usuario de GitHub de la persona que quieres añadir y enviarle una invitación.

**14. Quins rols o permisos pot tenir un usuari dins d'un repositori?**

Puede ser solo lector (solo puede ver el código), colaborador (puede hacer cambios) o administrador (puede gestionar todo el repositorio incluyendo los permisos de otros).

**15. Per què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**

Porque si das demasiados permisos a alguien que no debería tenerlos, podría borrar o modificar cosas importantes del proyecto por error o intencionadamente.

---

## 4. Aplica criteris de seguretat en l'accés dels usuaris

**16. Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**

Cualquier persona podría borrar archivos importantes, subir código con errores o incluso eliminar todo el historial del proyecto. También podría modificar la rama principal y romper algo que estaba funcionando bien.

**17. Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**

Porque si usas solo una contraseña normal y alguien la descubre, puede acceder a todos tus repositorios. Con un token o una clave SSH es mucho más difícil que alguien entre sin permiso, y además puedes revocarlos si crees que los han robado.

**18. Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?**

Cualquier persona que vea el repositorio podría usar esas contraseñas para acceder a otros servicios o bases de datos. Es un problema muy grave porque aunque borres el archivo, Git guarda el historial y la contraseña puede seguir siendo visible en commits anteriores.

**19. Quines bones pràctiques de seguretat s'han de seguir quan es treballa amb GitHub?**

- No subir nunca contraseñas ni claves privadas al repositorio.
- Usar un archivo `.gitignore` para excluir archivos sensibles.
- Activar la autenticación en dos pasos en la cuenta de GitHub.
- Revisar quién tiene acceso al repositorio de vez en cuando.
- Usar tokens en lugar de contraseñas para conectarte desde la terminal.

**20. Per què és important controlar qui pot fer push directament a la branca principal (main)?**

Porque si cualquiera puede subir cambios directamente a main, alguien podría añadir código con errores o incompleto y romper el proyecto para todos. Lo correcto es que los cambios pasen primero por una revisión mediante una pull request.

---

## 5. Utilitza les aplicacions de forma cooperativa

**21. Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**

Cada persona clona el repositorio en su ordenador y crea su propia rama para trabajar. Cuando terminan su parte, la suben a GitHub y hacen una pull request para que los demás la revisen. Si todo está bien se fusiona con la rama principal.

**22. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**

Porque si dos personas modifican el mismo archivo en main a la vez se crean conflictos difíciles de resolver. Con ramas, cada uno trabaja en su parte de forma independiente y solo se junta todo al final cuando está revisado y funciona bien.

---

## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

**23. Per què és important incloure un fitxer README.md en un repositori de GitHub?**

Porque es lo primero que ve cualquier persona que entra al repositorio. Explica de qué trata el proyecto, cómo instalarlo y cómo usarlo. Sin un README el proyecto es difícil de entender para alguien que no lo ha hecho.

**24. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**

Markdown es muy fácil de escribir porque no necesitas saber HTML ni ningún otro lenguaje. Con símbolos simples como `#` o `**` puedes crear títulos, negritas o listas, y GitHub lo convierte automáticamente en texto con formato bonito.

**25. Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**

Una buena documentación explica cómo está organizado el código, qué hace cada función y cómo poner en marcha el proyecto. Así otro desarrollador no tiene que leer todo el código para entender cómo funciona y puede empezar a trabajar o a modificarlo mucho más rápido.