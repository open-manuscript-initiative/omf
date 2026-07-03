#!/bin/bash
set -e

cd /var/www/vhosts/openmanuscript.org/source/openmanuscript

git pull
npm install
npm run build
rsync -av --delete build/ /var/www/vhosts/openmanuscript.org/httpdocs/

echo "Deployment completed."
echo ""
echo "--------------------------------"
echo "Open Manuscript Initiative"
echo "Deployment successful"
echo "Date: $(date)"
echo "--------------------------------"
