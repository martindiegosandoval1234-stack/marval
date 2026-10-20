# Documentos legales para Meta

Páginas públicas de la aplicación de Martín Diego:

- Política de privacidad
- Condiciones del servicio
- Instrucciones de eliminación de datos

Meta las exige en **Configuración de la app → Información básica** antes de dejar la app en producción. La URL tiene que abrirse por HTTPS, sin inicio de sesión, y devolver una página real. Un archivo Markdown visto dentro de GitHub (`github.com/.../blob/...` o `raw.githubusercontent.com`) suele fallar ese control: el rastreador no recibe la página, o no la reconoce como política.

## Verlas en local

```bash
npm install
npm run dev
```

Abre [http://127.0.0.1:47221](http://127.0.0.1:47221).

## Dónde están publicadas

El sitio público es [https://martindiegosandoval1234-stack.github.io/marval/](https://martindiegosandoval1234-stack.github.io/marval/).

GitHub Pages tiene que servir la rama `main` desde la carpeta `/ (root)`. El repositorio tiene que seguir siendo público.

## Qué pegar en Meta

En [Meta for Developers](https://developers.facebook.com/), entra en la app y ve a **Configuración de la app → Información básica**:

| Campo | URL |
| --- | --- |
| URL de la política de privacidad | `https://martindiegosandoval1234-stack.github.io/marval/privacidad/` |
| URL de las condiciones del servicio | `https://martindiegosandoval1234-stack.github.io/marval/condiciones/` |
| Instrucciones de eliminación de datos | `https://martindiegosandoval1234-stack.github.io/marval/eliminacion/` |

Guarda los cambios. Si el aviso tarda en desaparecer, espera unos minutos y vuelve a guardar. Puedes comprobar que el rastreador de Meta ve la página en el [Depurador de contenido compartido](https://developers.facebook.com/tools/debug/): la respuesta tiene que ser `200`.

## Qué adaptar si la app cambia

El texto ya lleva el nombre **Martín Diego** y el correo **martindiegosandoval1234@gmail.com**. Edita esas páginas si el contacto, el nombre de la app o los datos que recoges son otros.

Actualiza la política antes de pedir permisos nuevos (fotos, páginas, anuncios, ubicación, analítica de terceros o pagos). La frase que dice que la app no recoge datos de salud, biometría ni tarjetas tiene que seguir siendo cierta. Cambia la fecha de «Última actualización» cuando edites el texto. La URL puede quedarse igual.

Este texto es un modelo para cumplir el requisito de URL pública. No sustituye el asesoramiento de un abogado si la app trata datos sensibles, de menores o de muchos usuarios.
