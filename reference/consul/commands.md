# Check all active service in consul using curl
curl http://localhost:8500/v1/agent/services | jq
