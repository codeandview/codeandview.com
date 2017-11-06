#!/bin/ash

PASS_FILE="/etc/ssl/ca/passphrase.txt"

while getopts ":k:p" opt; do
  case ${opt} in
    k )
      KEY_NAME=${OPTARG}
      ;;
    c )
      CHAIN=${OPTARG}
      ;;
  esac
done
shift $((OPTIND -1))


cd /etc/ssl/ca
mkdir crl csr newcerts private
chmod 700 private
touch index.txt.attr
touch index.txt
echo 1000 > serial
echo 1000 > crlnumber


echo ">> Creating a key"
/usr/bin/openssl genrsa -out /certs/"${KEY_NAME}".key.pem 2048

echo ">> Creating a certificate"
/usr/bin/openssl req -config /etc/ssl/ca/openssl.cnf \
  -passin file:"${PASS_FILE}" \
  -key /certs/"${KEY_NAME}".key.pem \
  -new -sha256 -out /certs/"${KEY_NAME}".csr.pem
/usr/bin/openssl ca -config /etc/ssl/ca/openssl.cnf \
  -passin file:"${PASS_FILE}" \
  -batch \
  -extensions server_cert -days 375 -notext -md sha256 \
  -in /certs/"${KEY_NAME}".csr.pem \
  -out /certs/"${KEY_NAME}".cert.pem
cat /certs/"${KEY_NAME}".cert.pem /etc/ssl/ca/certs/"${CHAIN}" > /certs/"${KEY_NAME}"-bundle.cert.pem

