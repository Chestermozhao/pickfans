FROM tiangolo/uwsgi-nginx:python3.7
COPY . /pickfans
WORKDIR /pickfans
ENV UWSGI_INI ./pickfans/uwsgi.ini
ENV IS_LOCAL_ENV True
COPY pickfans /var/www/code/
COPY entrypoint.sh /entrypoint.sh
COPY conf/pip-uwsgi/logrotate /etc/logrotate.d/cmp
COPY conf/pip-uwsgi/uwsgi.ini /etc/uwsgi/uwsgi.ini
COPY conf/pip-uwsgi/uwsgi_params /etc/nginx/uwsgi_params
COPY conf/nginx-api/nginx.conf /etc/nginx/nginx.conf
COPY conf/nginx-api/host.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /entrypoint.sh

RUN pip3 install -r requirements.txt

ENTRYPOINT ["sh", "/entrypoint.sh"]
EXPOSE 8000
