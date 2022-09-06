#!/bin/bash

gracefulExit() {
    printf >&2 "$@"
    exit 1
}

[ "$#" -eq 3 ] || gracefulExit "2 arguments required, $# provided. \n  First parameter - config option (no .ext) \n  Second parameter - number of parallel runs (1-4)\n\n  Third parameter - version of Cypress to use"

echo $1 | grep -E -q '^(parallel|speedComparison)$' || gracefulExit "Incorrect value of first param: $1.\n  Correct values:\n    parallel\n    speedComparison\n\n"
echo $2 | grep -E -q '^(1|2|3|4)$' || gracefulExit "Incorrect value of second param: $2.\n  Correct values are numbers from 1 to 4\n\n"
echo $3 | grep -E -q '^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,2}$' || gracefulExit "Incorrect value of third param: $3.\n  Correct values are version strings eg. 10.4.0"

cmd="docker run --rm --user '$(id -u):$(id -g)' -d -i -v $PWD:/e2e -w /e2e --entrypoint yarn stanislawrosada/cypressdemo:$3 test:$1 --record --key does-not-matter --parallel --ci-build-id `date +%s`"

for (( i=1; i<=$2; i++ ))
do
    eval "$cmd"
done
