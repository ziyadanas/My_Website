#!/bin/bash

my_dir=$(realpath $(dirname $0))
#echo $my_dir
export FLASK_APP=$(ls $my_dir | grep "\.py")
#echo $FLASK_APP
export FLASK_ENV=development
flask run