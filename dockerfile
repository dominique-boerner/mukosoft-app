FROM nginx
COPY nginx.config /etc/nginx/nginx.config
COPY /out /usr/share/nginx/html
