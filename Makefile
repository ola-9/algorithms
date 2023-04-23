run:
	npm run dev

test:
	npm test

test-karatsuba:
	npx jest /__tests__/kbIntMult.test.js

run-karatsuba:
	node ./src/kbIntMult.cjs