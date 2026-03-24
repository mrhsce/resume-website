# Resume Website

This project is a Next.js resume website deployed on a VPS behind Nginx and managed with a systemd service (`resume-website.service`).

## Update and Deploy on VPS

From your VPS, run the following commands to pull latest changes, build, and restart the service:

```bash
cd /var/www/resume-website
git pull
yarn install
yarn build
sudo systemctl restart resume-website.service
```

## Verify Service Status

```bash
sudo systemctl status resume-website.service --no-pager
```

## View Service Logs

```bash
journalctl -u resume-website.service -n 100 --no-pager
```

## Local Development (Optional)

```bash
yarn install
yarn dev
```
