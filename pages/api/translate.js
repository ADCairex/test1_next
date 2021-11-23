const request = require('request');

async function get(req, res) {
    return 'Helpful information'
}

async function post(req, res) {


    const options = {
    method: 'POST',
    url: 'https://rimedia-translation.p.rapidapi.com/api_translate_limited.php',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'x-rapidapi-host': 'rimedia-translation.p.rapidapi.com',
        'x-rapidapi-key': '470acc944amsh2256ffa6cb98cadp140cc6jsn65a662d08f86',
        useQueryString: true
    },
    form: {text: req.body.text, to: req.body.to}
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(body)
    });

}

export default async function (req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).send(await get(req, res))
            break
        case 'POST':
            await post(req, res)
            break
        default:
            res.status(405).end() //Method Not Allowed
    }
}

