#!/bin/bash
set -e

# ==============================================================================
# Script de Despliegue para Lizbeth Bernal Segundo (lizbernal.mx)
# Servidor: propodvps1 (66.94.114.222:2226)
# ==============================================================================

VPS_USER="jose"
VPS_HOST="66.94.114.222"
VPS_PORT="2226"
SSH_KEY="$HOME/.ssh/propodvps1_jose"
REMOTE_APP_DIR="/home/jose/apps/lizbernal"
GIT_REPO="https://github.com/vonpeper/lizb.git"

echo "🚀 [1/4] Iniciando despliegue de lizbernal.mx hacia $VPS_HOST:$VPS_PORT..."

ssh -i "$SSH_KEY" -p "$VPS_PORT" "$VPS_USER@$VPS_HOST" 'bash -s' << 'EOF'
  set -e
  echo "📂 [2/4] Verificando directorio de la aplicación en el servidor..."
  mkdir -p /home/jose/apps
  
  if [ ! -d "/home/jose/apps/lizbernal/.git" ]; then
    echo "Clonando repositorio https://github.com/vonpeper/lizb.git..."
    git clone "https://github.com/vonpeper/lizb.git" "/home/jose/apps/lizbernal"
  else
    echo "Actualizando código desde la rama main..."
    cd "/home/jose/apps/lizbernal"
    git fetch origin main
    git reset --hard origin/main
  fi

  cd "/home/jose/apps/lizbernal"

  echo "🐳 [3/4] Construyendo imagen de producción y levantando contenedor en red prosuite..."
  echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman build -t lizbernal-app:latest .
  echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman rm -f lizbernal 2>/dev/null || true
  
  echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman run -d --name lizbernal \
    --network prosuite \
    --restart always \
    --label "org.prosuite.stack=lizbernal" \
    --label "traefik.enable=true" \
    --label "traefik.docker.network=prosuite" \
    --label "traefik.http.routers.lizbernal-apex.rule=Host(\`lizbernal.mx\`)" \
    --label "traefik.http.routers.lizbernal-apex.entrypoints=websecure" \
    --label "traefik.http.routers.lizbernal-apex.tls.certresolver=letsencrypt-dns" \
    --label "traefik.http.routers.lizbernal-apex.service=lizbernal" \
    --label "traefik.http.routers.lizbernal-www.rule=Host(\`www.lizbernal.mx\`)" \
    --label "traefik.http.routers.lizbernal-www.entrypoints=websecure" \
    --label "traefik.http.routers.lizbernal-www.tls.certresolver=letsencrypt-dns" \
    --label "traefik.http.routers.lizbernal-www.service=lizbernal" \
    --label "traefik.http.services.lizbernal.loadbalancer.server.port=3000" \
    lizbernal-app:latest

  echo "🔍 [4/4] Verificando estado del contenedor en Podman..."
  echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman ps --filter "name=lizbernal" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

  echo "✅ ¡Despliegue de Lizbeth Bernal Segundo completado exitosamente en https://lizbernal.mx!"
EOF
