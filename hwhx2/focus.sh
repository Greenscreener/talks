#!/bin/bash

device=$1
v4l2-ctl -d $device -c focus_automatic_continuous=0
trap "v4l2-ctl -d $device -c focus_automatic_continuous=1" EXIT
focus=15
while true;
do
	read -n1 key
	case "$key" in
		"k")
			v4l2-ctl -d /dev/video2 -c focus_absolute=$((focus+=5)) ;;

		"j")
			v4l2-ctl -d /dev/video2 -c focus_absolute=$((focus-=5)) ;;

		"u")
			focus=250
			v4l2-ctl -d /dev/video2 -c focus_absolute=$focus ;;
			
		"d")
			focus=15
			v4l2-ctl -d /dev/video2 -c focus_absolute=$focus ;;

		"m")
			focus=80
			v4l2-ctl -d /dev/video2 -c focus_absolute=$focus ;;


		"q")
			break ;;

		*)
			echo ""
	esac
	echo $focus
done
