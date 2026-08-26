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
GIT_REPO="git@github.com:vonpeper/lizb.git"

echo "🚀 [1/4] Iniciando despliegue de lizbernal.mx hacia $VPS_HOST:$VPS_PORT..."

ssh -i "$SSH_KEY" -p "$VPS_PORT" "$VPS_USER@$VPS_HOST" << EOF
  set -e
  echo "📂 [2/4] Verificando directorio de la aplicación en el servidor..."
  mkdir -p /home/jose/apps
  
  if [ ! -d "$REMOTE_APP_DIR/.git" ]; then
    echo "Clonando repositorio $GIT_REPO..."
    git clone "$GIT_REPO" "$REMOTE_APP_DIR" || git clone "https://github.com/vonpeper/lizb.git" "$REMOTE_APP_DIR"
  else
    echo "Actualizando código desde la rama main..."
    cd "$REMOTE_APP_DIR"
    git fetch origin main
    git reset --hard origin/main
  fi

  cd "$REMOTE_APP_DIR"

  echo "🐳 [3/4] Construyendo imagen y levantando contenedor en dokploy-network..."
  if command -v docker-compose &> /dev/null; then
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S docker-compose build --pull
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S docker-compose up -d --remove-orphans
  elif command -v docker &> /dev/null && docker compose version &> /dev/null; then
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S docker compose build --pull
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S docker compose up -d --remove-orphans
  elif command -v podman-compose &> /dev/null; then
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman-compose build
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman-compose up -d
  else
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman build -t lizbernal-app:latest .
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman rm -f lizbernal-app 2>/dev/null || true
    echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman run -d --name lizbernal-app \
      --network dokploy-network \
      --restart always \
      --label "traefik.enable=true" \
      --label "traefik.http.routers.lizbernal.rule=Host(\`lizbernal.mx\`) || Host(\`www.lizbernal.mx\`)" \
      --label "traefik.http.routers.lizbernal.entrypoints=websecure" \
      --label "traefik.http.routers.lizbernal.tls.certresolver=letsencrypt" \
      --label "traefik.http.services.lizbernal.loadbalancer.server.port=3000" \
      --label "traefik.docker.network=dokploy-network" \
      lizbernal-app:latest
  fi

  echo "🔍 [4/4] Verificando estado del contenedor..."
  echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S podman ps --filter "name=lizbernal" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" 2>/dev/null || echo "BvJhdx2S77NOv3Oqx62UwsX/" | sudo -S docker ps --filter "name=lizbernal"

  echo "✅ ¡Despliegue de Lizbeth Bernal Segundo completado exitosamente en https://lizbernal.mx!"
EOF
