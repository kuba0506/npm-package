# Example

```shell
$ npm i npm-package -S
```

```javascript
const {sensitiveWords} = require('npm-package-kuba0506');

//ES2015 modules
import {sensitiveWords} from 'npm-package-kuba0506'

const filtered = sensitiveWords(
    'New apple mackbook pro has touchbar',
    ['pro', 'touchbar']
);

console.log(filtered);
//New apple mackbook *** has ***
```