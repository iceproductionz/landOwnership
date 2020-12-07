Land Ownership
==============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/Land Ownership.svg)](https://npmjs.org/package/Land Ownership)
[![Downloads/week](https://img.shields.io/npm/dw/Land Ownership.svg)](https://npmjs.org/package/Land Ownership)
[![License](https://img.shields.io/npm/l/Land Ownership.svg)](https://github.com/iceproductionz/Land Ownership/blob/master/package.json)

<!-- toc -->
- [Land Ownership](#land-ownership)
- [Requirements](#requirements)
- [Configuration](#configuration)
- [Commands](#commands)
- [TODO](#todo)
<!-- tocstop -->

# Requirements
 - NPM / Node

# Configuration

Please update `./src/Config/config.js` with location to files

<!-- usagestop -->
# Commands
<!-- commands -->
``` bash
./bin/run --help
```

For Limited Expansion
``` bash
./bin/run -m="expand" -c="S675993292454"
```

Partial Tree Expansion 
``` bash
./bin/run -m="from_root" -c="S675993292454"
```

Full Tree Expansion 
``` bash
./bin/run -m="tree" -c="S675993292454"
```
<!-- commandsstop -->

# TODO

- Add Tests
- Do the Expand Renderer
- Reduce Duplication in Renderer(s)
- Consider using docker
- Reconsider framework limitations of ES6 code
- Give b
