import { creatServer } from 'node:http';

creatServer(function (resquest, response) {
    if (resquest.url === '/api/health') {
        response.writeHead(
            200, 
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify({ status: ok }));
        return;
    }

    response.writeHead(
        404, 
        { 'content-type': 'application/json' }
    );
    response.end(JSON.stringify({ message: 'recurso nao encontrado.' }));
}).listen(3000);