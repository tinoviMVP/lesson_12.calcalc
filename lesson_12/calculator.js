const OPERATION ={
    sum: '+',
    substract: '-',
    multyply: '*',
    division: '/'
}

function calculate({ a, b, operation }) {
    let results = null;

    switch (operation) {
        case OPERATION.sun:
            results = sum(a, b);
            break;

        case OPERATION.substract:
            results = substract(a, b);
            break;

        case OPERATION.multyply:
            results = multyply(a, b);
            break;

        case OPERATION.division:
            results = divison(a, b);
            break;

        default:
            break;
    }


    return results;
}