# Hola mundo
### Bienvenidos

Esta es la **comisión 2**. Otro *texto* de ***prueba*** ~~obsoleto~~.

"No todo lo que brilla es porno."
> Ignacio

Lista de compras:\
- [ ] azúcar
- [x] yerba
- [ ] pan

Tabla de métodos HTTP:
| Tipo | URI | Descripción |
| ---- | --- | ----------- |
| GET  | http://127.0.0.1:3000/coches | Obtener todos los coches |
| GET  | http://127.0.0.1:3000/coches/1 | Obtener un coche en específico |
| POST | http://127.0.0.1:3000/coches/1 | Crear un coche en específico |

``` javascript
function generateToken(username, isAdmin) {
    return jwt.sign({ username, isAdmin }, process.env.SECRET_KEY, { expiresIn: 30s})
}
```