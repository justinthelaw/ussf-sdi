#!/bin/bash

cp ./README.md ./docs/header.png ./docs/schema.png ./app/client/src/assets/
cp ./config/.env ./app/client/
sed -i -e 's/^/REACT_APP_/' ./app/client/.env && printf "Setup complete!\n"