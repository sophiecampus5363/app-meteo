const baseUrl ='http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}';
const apiKey ='6c792b08d2cbc536c634c6d858628d6d';

export function requestGet(endPoint, query='') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?{query}&APPID=${apiKey}`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
                .json()
                .then(json => {
                    return json !== undefined ? json : {};
                })
                .catch(e => ({}));
        }
        return response.status;
    });
}