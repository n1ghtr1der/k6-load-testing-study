import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    vus: '5',
    duration: '1m'
};

export default function () {
    const response = http.get("http://192.168.56.22");
    check(response, {"status is OK 200": (r) => r.status === 200});
    sleep(1);
}