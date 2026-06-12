# 💍 Monopoly LOTR: Gestor y Traductor de Quests

Una aplicación web diseñada exclusivamente como herramienta de apoyo (companion app) para el juego de mesa físico **Monopoly: El Señor de los Anillos (Edición en Inglés)**. Su propósito principal es facilitar la traducción y gestión de las cartas de misión (Quests) para que los jugadores de habla hispana puedan disfrutar del juego sin barreras de idioma.

*Nota: Esta aplicación no es un tablero de juego virtual, sino un acompañante digital para simplificar la lectura y el uso de las mecánicas de las cartas.*

## 🌟 Características Principales

* **Traducción Inmediata:** Mazo digital que muestra las misiones y sus recompensas en español. Incluye un interruptor para revelar el texto original en inglés y verificar con las cartas físicas.
* **Gestión de la Comunidad:** Creación de perfiles de jugador con contraseña (Palabra Secreta) y selección de fichas (Tokens) mediante imágenes personalizadas.
* **Inventario Privado:** Los jugadores pueden guardar cartas secretas en su inventario digital para usarlas estratégicamente, entregarlas o intercambiarlas con otros viajeros mediante un sistema de validación segura.
* **Persistencia de Datos:** La partida se guarda automáticamente en la memoria del navegador (`localStorage`), permitiendo retomar la sesión intacta si se recarga o cierra la pestaña por accidente.

## 🛠️ Tecnologías Usadas

Este proyecto está construido de forma modular y sin dependencias externas (Vanilla):
* **HTML5:** Estructura semántica, menús e interfaces modales.
* **CSS3:** Diseño responsivo, interfaz limpia y un tema oscuro ("Dark Theme") inspirado en la estética de la Tierra Media.
* **JavaScript (ES6):** Lógica de gestión de usuarios, manipulación del DOM, barajado de misiones y almacenamiento local.
