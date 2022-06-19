FROM nginx
COPY configs/nginx.config /etc/nginx/nginx.config
COPY /out /usr/share/nginx/html
