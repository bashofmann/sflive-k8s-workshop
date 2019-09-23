# 9. Nginx Ingress Controller

## Presenter only

* Install nginx ingress controller:
```
helm upgrade --install -f values.yaml --namespace nginx-ingress nginx-ingress stable/nginx-ingress
```

* Create wildcard DNS entry pointing to ingress controller external IP
