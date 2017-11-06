FROM gliderlabs/alpine:3.1

MAINTAINER Julien Guittard <julien@codeandview.com>

RUN apk-install openssl

CMD mkdir -p /etc/ssl/ca/certs
COPY openssl.cnf /etc/ssl/ca/
COPY passphrase.txt /etc/ssl/ca/
COPY *.pem /etc/ssl/ca/certs/

COPY entrypoint.sh /opt/entrypoint.sh
RUN chmod a+x /opt/entrypoint.sh

ENTRYPOINT "/opt/entrypoint.sh" -k ${KEY_NAME} -c ${CHAIN}

# docker build .
# docker run --rm --env KEY_NAME="codeandview.local" --env CHAIN="codeandview-ca-chain.cert.pem" --mount type=bind,source="$(pwd)"/certs,target=/certs <IMAGE_ID>
