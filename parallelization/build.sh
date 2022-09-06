#!/bin/bash

gracefulExit() {
    printf >&2 "$@"
    exit 1
}

[ "$#" -eq 2 ] || gracefulExit "2 arguments required, $# provided. \n  First parameter - Address of the self-hosted Cypress Dashboard)\n\n  Second parameter - "

echo $2 | grep -E -q '^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}$' || gracefulExit "Incorrect value of second param: $2.\n  Correct values are version strings eg. 10.4.0"

sed -ri 's/DASHBOARD_URL/"http:\/\/'"$1"'"/g' app.yml
sed -ri 's/CYPRESS_VERSION/'"$2"'/g' Dockerfile

IMAGE_NAME=stanislawrosada/cypressdemo:$2

docker build -t $IMAGE_NAME .
