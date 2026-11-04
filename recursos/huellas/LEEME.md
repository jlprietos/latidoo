# Corazón de huellas · Latidoo

Plantilla aprobada el 13/10/2026 para todo el material de Latidoo: redes sociales, flyers, cursos, talleres y web.

Dos huellas dactilares reales que se solapan y forman un corazón: una de la madre o el padre y otra del hijo.

## Archivos

| Archivo | Uso |
| --- | --- |
| `huellas-corazon-fondo-claro.svg` | Vino tinto (#8E2A44) + naranja (#E07B39). Para fondos claros o crema. Web y diseño. |
| `huellas-corazon-fondo-claro.png` | La misma, PNG transparente en alta resolución (1836×1652). Canva, redes, flyers. |
| `huellas-corazon-fondo-oscuro.svg` | Naranja claro (#F4A672) + rosa (#E3CBD3). Para fondos oscuros (vino #2E0F1C). |
| `huellas-corazon-fondo-oscuro.png` | La misma, PNG transparente en alta resolución (2080×1872). |
| `generar-huellas.py` | Script que dibuja las huellas. Sirve para sacar nuevas combinaciones de color. |

## Notas de uso

- Usar SVG siempre que se pueda (web, imprenta): no pierde calidad a ningún tamaño.
- Por debajo de unos 120 px de ancho las crestas se empastan: para iconos o favicon conviene una versión simplificada.
- Los colores son aproximados a los corazones de la marca. Si Pati fija los colores exactos, se cambian en el script y se regeneran.

## Cambiar colores

En `generar-huellas.py`, las dos últimas llamadas a `heart(...)` llevan los colores: el primero es la huella izquierda y el segundo la derecha. Ejecutar:

```
python3 generar-huellas.py
```
