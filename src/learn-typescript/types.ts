var n: number = 1;

//n = 'Bobb';
n = 12356;
let isDone: boolean = false;

function statusCheck(isDone) {
    isDone ? console.log('All set good to go !') : console.log('Still working on..!')
}

statusCheck(isDone);
statusCheck(true);