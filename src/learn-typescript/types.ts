var n: number = 1;

//n = 'Bobb';
n = 12356;
let isDone: boolean = false;

function statusCheck(status: boolean) {
    status ? console.log('All set good to go !') : console.log('Still working on..!')
}

statusCheck(isDone);
statusCheck(true);
statusCheck(n);