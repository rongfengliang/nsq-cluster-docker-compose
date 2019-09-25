# nsq cluster demo

3 nsqd && 2 nsqlookupd && nsqadmin

## how to running

* start nsq cluster

```code
docker-compose up -d
```

* view admin 

```code
open http://localhost:4171
```

* add host  info

```codee
/etc/hosts

127.0.0.1 ysdp-nsq-nsqd1
127.0.0.1 ysdp-nsq-nsqd2
127.0.0.1 ysdp-nsq-nsqd3
```

* run test

start consumer

```code
cd api
yarn
yarn app
```

publish some message

```code
curl -d "it really tied the room together" http://localhost:4151/pub?topic=sample_topic
```
