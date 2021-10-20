#!/bin/bash

BASEDIR=$(dirname "$0")
generate_key() {
  FOLDER=$1
  FILE_KEY="${BASEDIR}/${FOLDER}/ssl.key"
  FILE_CRT="${BASEDIR}/${FOLDER}/ssl.crt"
  FILE_CSR="${BASEDIR}/${FOLDER}/ssl.csr"
  PASSWORD="pass:word"
  SUBJECT="/C=FR/ST=France/L=Lyon/O=JochLAin/CN=$2"

  mkdir -p "${BASEDIR}/${FOLDER}"
  rm -f $FILE_KEY $FILE_CRT $FILE_CSR

  openssl genrsa -des3 -out $FILE_KEY -passout $PASSWORD 1024
  openssl req -new -key $FILE_KEY -passin $PASSWORD -out $FILE_CSR -subj $SUBJECT

  cp $FILE_KEY "${FILE_KEY}.org"
  openssl rsa -in "${FILE_KEY}.org" -passin $PASSWORD -out $FILE_KEY
  rm -f "${FILE_KEY}.org"

  openssl x509 -req -days 365 -in $FILE_CSR -signkey $FILE_KEY -out $FILE_CRT
}

DOMAIN="jochlain.localhost"
generate_key www "${DOMAIN}"
