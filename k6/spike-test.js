import http from "k6/http";
import { check, sleep } from 'k6'

export const options = {
   stages: [
      { duration: '2m', target: 2000 },
      { duration: '1m', target: 0 }
   ],
   thresholds: {
      http_req_duration: ['p(95)<350'],
      http_req_failed: ['rate<0.10']
   }
};

export default function () {
   const response = http.get("http://192.168.56.22");
   check(response, { "status is 200": (r) => r.status === 200 });
   sleep(1);
}

