# Monitoring

## Presenter only

```
kubectl create namespace monitoring
kubectl apply -f basic-auth.yaml
helm upgrade --install --namespace monitoring -f values.yaml prom stable/prometheus-operator
kubectl apply -f dashboards/
kubectl apply -f service-monitors/
```
