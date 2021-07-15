
FROM postgres:12.2-alpine

USER postgres

EXPOSE 5432

VOLUME [ "/data/docker-checkpoint" ]

FROM library/postgres
COPY init.sql /docker-entrypoint-initdb.d/

FROM library/postgres
ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB docker