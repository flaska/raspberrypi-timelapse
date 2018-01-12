#!/bin/bash
TIMESTAMP=$(date +"%Y-%m-%d_%H%M")
W=1476
H=972
O=/home/pi/camera/recorded/timelapse_$TIMESTAMP.jpg
ROTATION=90
DELAY="-t 1"
#raspistill -o $O -w $W -h $H -rot $ROTATION
