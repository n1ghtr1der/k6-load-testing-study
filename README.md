# k6-load-testing-study

K6 running command: K6_PROMETHEUS_RW_SERVER_URL=http://localhost:9090/api/v1/write && k6 run -o experimental-prometheus-rw script.js

On Docker: docker run --env-file ../.env --rm -i grafana/k6 run -o experimental-prometheus-rw  - <script.js

Grafana K6 Dashboard: https://grafana.com/grafana/dashboards/19665-k6-prometheus/
