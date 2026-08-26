# Lizbeth Bernal Segundo — Sitio Web Profesional e Institucional

Plataforma profesional, responsive y optimizada para buscadores de **Lizbeth Bernal Segundo**, abogada y servidora pública con experiencia en representación jurídica municipal, litigio privado, control presupuestal y protección del patrimonio público.

- **Dominio:** [lizbernal.mx](https://lizbernal.mx)
- **Repositorio GitHub:** [vonpeper/lizb](https://github.com/vonpeper/lizb)
- **Servidor de Producción:** VPS `propodvps1` (Traefik + Podman en `dokploy-network` con SSL automático de Let's Encrypt)

---

## 🏛️ Enfoque Estratégico e Institucional

Este sitio ha sido diseñado con una estética editorial sobria, contemporánea y minimalista, inspirada en estándares institucionales y editoriales internacionales:
- **Sin fines electorales:** No contiene consignas partidistas, llamados al voto ni elementos de campaña política.
- **Rigor biográfico:** Toda la información corresponde estrictamente a la formación y trayectoria documentada (ISIMA Universidad, UVM Campus Metepec, Galeana & Asociados, Montes de Oca y Sindicatura Municipal de Villa de Allende).
- **Prudencia institucional:** No expone datos personales sensibles, domicilios privados ni correos no autorizados.

---

## 🎨 Sistema de Diseño y Tokens Cromáticos

| Token CSS | Valor HEX | Uso |
|---|---|---|
| `--bg-main` | `#FFFDFC` | Fondo principal blanco cálido |
| `--bg-alt` | `#FFF6F2` | Fondo alternativo suave para bloques de descanso |
| `--salmon-100` | `#FFE4DC` | Salmón muy claro para superficies y badges |
| `--salmon-400` | `#F6B6A6` | Salmón suave para transiciones |
| `--salmon-500` | `#E88771` | Salmón principal decorativo |
| `--salmon-700` | `#B94F3D` | Salmón oscuro accesible para textos y botones (WCAG AA) |
| `--text-main` | `#181412` | Texto principal de alto contraste |
| `--text-secondary` | `#6B605C` | Texto secundario y descriptivo |
| `--border-color` | `#EADDD8` | Líneas divisorias y bordes sutiles |

### Tipografía
- **Encabezados editoriales:** `Cormorant Garamond` (Google Fonts vía `next/font`)
- **Cuerpo, datos y navegación:** `Manrope` (Google Fonts vía `next/font`)

---

## 🏗️ Arquitectura Técnica

```
├── app/
│   ├── globals.css           # Tokens de diseño y estilos base
│   ├── icon.tsx              # Favicon dinámico generado con ImageResponse (LB)
│   ├── layout.tsx            # Metadata SEO, fuentes y JSON-LD sanitizado
│   ├── opengraph-image.tsx   # Tarjeta Open Graph dinámica (1200x630)
│   ├── page.tsx              # Página principal (App Router)
│   ├── robots.ts             # Directivas de indexación y sitemap
│   └── sitemap.ts            # Mapa del sitio XML
├── components/
│   ├── navigation.tsx        # Cabecera sticky con navegación activa y menú móvil
│   ├── hero.tsx              # Hero editorial con H1 fluido y retrato
│   ├── profile.tsx           # Sección narrativa "Una trayectoria construida desde el Derecho"
│   ├── expertise.tsx         # 4 Áreas de práctica y atribuciones
│   ├── timeline.tsx          # Línea de tiempo vertical e interactiva
│   ├── education.tsx         # Bloques de formación (UVM Metepec e ISIMA)
│   ├── parallax-statement.tsx# Descanso visual con parallax sutil
│   ├── principles.tsx        # Principios: Legalidad, Responsabilidad, Servicio
│   ├── contact-cta.tsx       # Llamado a la acción final
│   ├── contact-modal.tsx     # Modal accesible de correspondencia profesional
│   └── footer.tsx            # Pie de página institucional y disclaimer
├── data/
│   └── profile.ts            # Datos centralizados, fechas, textos y metadatos
├── lib/
│   └── structured-data.ts    # Generador de Schema.org (ProfilePage + Person)
├── public/
│   └── images/               # Activos estáticos y fotografías
├── Dockerfile                # Build multi-stage para producción
├── docker-compose.yml        # Orquestación con Traefik en dokploy-network
├── deploy.sh                 # Script de despliegue al VPS
└── .github/workflows/
    └── deploy.yml            # CI/CD automático en GitHub Actions
```

---

## 💻 Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Ejecutar análisis de linter
npm run lint

# 4. Compilar para producción
npm run build
```

---

## 🚀 Despliegue en Servidor VPS

### Método 1: Despliegue Automatizado (Script)
```bash
./deploy.sh
```

### Método 2: Despliegue mediante GitHub Actions (CI/CD)
Al hacer push a la rama `main` en `vonpeper/lizb`, el flujo de trabajo `.github/workflows/deploy.yml` compilará la aplicación y actualizará el contenedor en el VPS.

Configuración de secretos requeridos en GitHub (`Settings > Secrets and variables > Actions`):
- `VPS_SSH_KEY`: Contenido de la llave SSH privada `~/.ssh/propodvps1_jose`
- `VPS_SUDO_PASS`: `BvJhdx2S77NOv3Oqx62UwsX/`
- `VPS_HOST`: `66.94.114.222`
- `VPS_PORT`: `2226`
- `VPS_USER`: `jose`

---

## 📈 Checklist Post-Despliegue para SEO

1. **Google Search Console:**
   - Registrar la propiedad `https://lizbernal.mx`.
   - Verificar la propiedad mediante registro DNS TXT o etiqueta HTML.
   - Enviar el mapa del sitio: `https://lizbernal.mx/sitemap.xml`.
   - Solicitar indexación de la URL principal.
2. **Validación de Datos Estructurados:**
   - Probar la URL en [Google Rich Results Test](https://search.google.com/test/rich-results) para validar el schema `ProfilePage` y `Person`.
3. **Bing Webmaster Tools:**
   - Importar o dar de alta el sitio y enviar `sitemap.xml`.
4. **Core Web Vitals & Rendimiento:**
   - Ejecutar auditoría Lighthouse en producción para asegurar scores superiores a 95 en Rendimiento, Accesibilidad, Mejores Prácticas y SEO.

---

## 📋 Activos y Decisiones Pendientes

- [ ] **Fotografía Editorial Oficial:** Subir el archivo en `public/images/lizbeth-bernal-retrato.webp` (dimensiones recomendadas 900x1125 px).
- [ ] **Buzón de Correo:** Habilitar el buzón `contacto@lizbernal.mx` en el servidor de correo o actualizar la dirección definitiva en `data/profile.ts`.
- [ ] **Revisión Jurídica:** Confirmar el texto final del disclaimer legal al pie del sitio antes de campañas informativas.
