#!/usr/bin/env bash
# Joao G. Santos
# CAPSUL

(which docker && which docker-compose) >& /dev/null
[ $? -ne 0 ] && {
  echo "Please install docker and docker-compose first"
  exit
}

[ ! -d /data/db ] && {
  mkdir -p /data/db
  chown mongodb:mongodb /data/db
}

# host directories
p_directories=(
  '/data/db'
  '/data/backup'
  '/data/storage'
)

# ordered profiles for building
profiles=(
  'install'
  'frontend'
  'backend'
  'postup'
)

# creates host directories
echo "${p_directories[@]}" | xargs -n1 mkdir -p

# in case profiles are specified, build them only
target="$1"
[ ! -z "$target" ] && profiles="$target"

# volumes to be pruned
volumes=$(docker volume ls | awk 'NR != 1 { print $2 }' | grep -v 'watchdog-reports')

# kills running docker containers
docker kill $(docker ps -q)

# cleans up everything
docker network prune -f
docker container prune -f
docker-compose down
docker-compose down --volumes

for volume in ${volumes[*]}; do
  docker volume rm "${volume}" -f
done

for profile in ${profiles[*]}; do
  docker-compose --profile "${profile}" up \
    --build \
    --force-recreate \
    --remove-orphans

  [ $? -ne 0 ] && {
    echo "Previous step failed"
    break
  }
done
