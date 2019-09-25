#!/bin/bash

while true 
do
    sleep 0.01
    curl -d "it really tied the room together" http://localhost:4151/pub?topic=sample_topic
done
