# Install

```sh
docker-compose up -d
# Deploy your DB structure
docker exec -i *_postgres_1 psql app_db app_user < *.sql
```

# Play with it

go to http://0.0.0.0 or if you prefere the CLI

```
curl 0.0.0.0/actor -d id=miniRoom
curl 0.0.0.0/actor -d id=bigRoom
curl 0.0.0.0/actor -d id=tom
curl 0.0.0.0/actor -H 'Content-Type: application/json' --data '{"id":"u'$(date +%N)'","free":[['$(printf '0,%.0s' {1..23})'0]]}'
curl 0.0.0.0/piece -d id=hash -d roles='{"romeo":["tom","tim"],"juliette":["eva","mia"]}'
curl 0.0.0.0/piece -d id=list -d roles='[["romeo","tom"],["juliette","eva"]]'
curl 0.0.0.0/piece -d id=hash -d roles='{"romeo":"tom","juliette":"eva"}'
curl 0.0.0.0/piece -H 'Content-Type: application/json' --data '{"id":"hash","roles":{"romeo":["tom","tim"],"juliette":["eva","mia"]}}'
curl 0.0.0.0/play  -d piece_id=macbeth -d date=12/12/2012 -d time=23:00 -d actors='{"macbeth":"toto","fool":"romeo"}'


{'romeo':'tom','juliette':'eva'}
[['romeo','tom'],['juliette','eva']]
{'romeo':['tom','tim'],'juliette':['eva','mia']}

```

eq, =
gte, >=
gt, >
lte, <=
lt, <
neq, <>
like, LIKE
ilike, ILIKE
in, IN
is, IS
// array
cs, @>
cd, <@
// array+range
ov, &&
// range
sl, <<
sr, >>
nxr, &<
nxl, &>
adj, -|-

