function validator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validUri = /(^[\w.]+$)/;
    const messageReg = /([<>\\&'"])/;

    if (!obj.method || !validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || obj.uri == '' || !validUri.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!obj.version || !validVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (obj.message === undefined || messageReg.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj
}

validator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
});

validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});