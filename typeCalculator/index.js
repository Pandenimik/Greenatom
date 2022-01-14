"use strict";
/*
    Нужно типизировать интерфейс Calculator, так, чтобы вызовы `calculator` были
    с ошибками компиляции или без них в зависимости от переданных параметров.
    Типы SumAction, LengthAction, ZeroAction также можно менять.
*/
console.log('Тест');
/* Этот код трогать не нужно */
const calculator = (command) => {
    switch (command) {
        case 'sum':
            return (a, b) => a + b;
        case 'length':
            return (a) => a.length;
        case 'zero':
            return (a) => (typeof a === 'string' ? a.length !== 0 : a !== 0);
        case 'log':
            return (b) => (a) => Math.log(a) / Math.log(b);
    }
};
/* --- */
/* Без ошибок */
console.log(calculator('sum')(10, 15));
calculator('length')('qweqweq');
calculator('zero')(10);
calculator('zero')('qweqwe');
const ln = calculator('log')(Math.E);
ln(15);
calculator('log')(2)(256);
/* Без ошибок */
/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/
/* С ошибками */
// @ts-expect-error
calculator('lalaka')('malaka');
// @ts-expect-error
calculator('sum')(true);
// @ts-expect-error
calculator('sum')(10);
// @ts-expect-error
calculator('sum')('1');
// @ts-expect-error
calculator('length')(10);
// @ts-expect-error
calculator('length')(true);
// @ts-expect-error
calculator('length')('a', 'b');
// @ts-expect-error
calculator('zero')(10, 10);
// @ts-expect-error
calculator('zero')(10, '10');
// @ts-expect-error
calculator('zero')('10', 10);
// @ts-expect-error
calculator('zero')(true);
// @ts-expect-error
calculator('zero')({});
// @ts-expect-error
calculator('zero')([]);
// @ts-expect-error
calculator('log')('e');
// @ts-expect-error
calculator('log')('10');
// @ts-expect-error
calculator('log')(true);
// @ts-expect-error
calculator('log')(10)('100');
// @ts-expect-error
calculator('log')(10)(true);
// @ts-expect-error
calculator('log')(2, 1024);
/* --- */
//# sourceMappingURL=index.js.map