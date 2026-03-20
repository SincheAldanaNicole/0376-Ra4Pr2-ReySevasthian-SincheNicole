## 4. Aplica criteris de seguretat en l'accés dels usuaris

*1. Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?*
Cualquier persona podría borrar archivos, subir código con errores o incluso eliminar el repositorio entero. En proyectos importantes esto podría ser un problema grave.

*2. Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?*
Porque si usas solo la contraseña y alguien la descubre puede acceder a todos tus repositorios. Los tokens y SSH son más seguros porque son más difíciles de robar.

*3. Què passaria si es publiquen contrasenyes o claus privades dins d'un repositori?*
Cualquier persona que vea el repositorio podría usar esas contraseñas para acceder a servicios privados o bases de datos. Es un error muy grave de seguridad.

*4. Quines bones pràctiques de seguretat s'han de seguir quan es treballa amb GitHub?*
No subir nunca contraseñas ni claves al repositorio, usar tokens en lugar de contraseñas, revisar quién tiene acceso al repositorio y activar la autenticación en dos pasos en la cuenta.

*5. Per què és important controlar qui pot fer push directament a la branca principal (main)?*
Porque la rama principal es el código que está en producción o que se considera estable. Si cualquiera puede modificarla directamente se podrían introducir errores sin que nadie los revise.

---

## 5. Utilitza les aplicacions de forma cooperativa

*1. Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.*
Cada persona trabaja en su propia rama sin molestar al resto. Cuando termina su parte hace una pull request para juntar su trabajo con el del equipo. Así cada uno puede trabajar a su ritmo sin pisarse.

*2. Per què és útil treballar amb branques en lloc de modificar directament la branca principal?*
Porque si algo sale mal en tu rama no afecta al código principal. Además permite que varias personas trabajen a la vez en diferentes funciones sin que sus cambios interfieran entre sí.

---

## 6. Elabora documentació relativa a l'ús i la gestió de les aplicacions

*1. Per què és important incloure un fitxer README.md en un repositori de GitHub?*
Porque es lo primero que ve cualquier persona que entra al repositorio. Explica qué hace el proyecto, cómo instalarlo y cómo usarlo, así no hay que preguntar al autor para entenderlo.

*2. Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?*
Es muy fácil de escribir y se ve bien formateado directamente en GitHub sin necesidad de ningún programa especial. Con símbolos simples puedes poner títulos, listas o texto en negrita.

*3. Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?*
Les permite entender rápidamente cómo funciona el proyecto y cómo pueden contribuir sin tener que leer todo el código. Ahorra mucho tiempo cuando el proyecto lo van a usar o modificar otras personas.