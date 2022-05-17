#! /bin/zsh

# Publishes a BOM to local DT instance.
#
# Note: this would normally be done with Jenkins Plugin or GitHub Action in CI-Pipeline

# API Key: http://localhost:8080/admin

# Aufruf: https://docs.dependencytrack.org/usage/cicd/


# Payload:
#   { 
#     "project": "PROJECT-UUID-AUS-URL",
#     "bom": "base64-encodierter-bom-string"
# }

# Meine Test-Project-uuid: 0d2c0d6a-9a63-4931-ad99-409507e8ba6d

BOM=`cat ./old-react-app/bom.json|base64`

echo "{ \"project\": \"e2ce9a80-7ffa-43f0-a06f-c6eee9d33d4f\", \"bom\": \"$BOM\" }" >bom-payload.json

# React-Training: 0d2c0d6a-9a63-4931-ad99-409507e8ba6d
# Old-React-App: e2ce9a80-7ffa-43f0-a06f-c6eee9d33d4f

curl -X "PUT" "http://localhost:8081/api/v1/bom" \
     -H 'Content-Type: application/json' \
     -H 'X-API-Key: sbTu90axDRqI7gSXSedg9dFYOCZ8DkCN' \
     -d @bom-payload.json

rm -f bom-payload.json