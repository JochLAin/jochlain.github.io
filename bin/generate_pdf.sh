#!/bin/bash

DIRECTORY=$(dirname -- "${BASH_SOURCE[0]}")

wkhtmltopdf \
 --javascript-delay 1000 \
 -B 0mm \
 -L 0mm \
 -R 0mm \
 -T 0mm \
 "$DIRECTORY/../public/cv.html" \
 "$DIRECTORY/../public/cv.pdf"
