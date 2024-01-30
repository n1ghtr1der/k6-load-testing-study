
import http from "k6/http";
import { check, sleep } from 'k6'

export const options = {
   stages: [
	{ duration: '10s', target: 3000 },
	{ duration: '180s', target: 10000 },
	{ duration: '10s', target: 0 }
   ],
   thresholds: {
        http_req_duration: [
	    {
                threshold: 'p(90) < 15000',
                abortOnFail: false,
                delayAbortEval: 100
            }
	]    
   }
};

export default function () {
  const response = http.get("http://192.168.56.22");
  check(response, { "status is 200": (r) => r.status === 200 })
  sleep(.300)
}

