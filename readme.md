# strify
short cut for `fs.readFileSync(__dirname + '/path/file.txt', 'utf-8')`

## install

```bash
npm install --save strify
```


## use


it's just a tiny helper function:
```js
strify('/path/file.txt');
```

that is equal to:
```js
fs.readFileSync(__dirname + '/path/file.txt', 'utf-8')
```

### example

```js
var strify = require('strify');

var tmpl = strify('./views/login.ejs');
// tmpl holds the read file as a string.
 ```

## license
MIT
