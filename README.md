# Example

```shell
$ npm i npm-package -S
```

```javascript
const {sensitiveWords} = require('sensitive-words');

//ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const filtered = sensitiveWords(
    'New apple mackbook pro has touchbar',
    ['pro', 'touchbar']
);

console.log(filtered);
//New apple mackbook *** has ***
```