# Example

```shell
$ npm install npm-package -S
```

```javascript
const {sensitiveWords} = require('npm-package');

//ES2015 modules
import {sensitiveWords} from 'npm-package'

const filtered = sensitiveWords(
    'New apple mackbook pro has touchbar',
    ['pro', 'touchbar']
);

console.log(filtered);
//New apple mackbook *** has ***
```