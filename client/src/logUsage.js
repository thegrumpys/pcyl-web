import { displayError } from './components/ErrorModal';

export function logUsage(note) {
    var body = JSON.stringify({note: note});
//    console.log('body=',body);
    fetch('/api/v1/usage_log', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: body
        })
        .then(res => {
//            console.log('res=',res);
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json()
        })
        .catch(error => {
//            console.log('error=',error);
            displayError('POST of usage_log of note \''+note+'\' failed with message: \''+error.message+'\'');
        });
}