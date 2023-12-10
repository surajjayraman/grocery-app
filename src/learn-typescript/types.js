var n = 1;
//n = 'Bobb';
n = 12356;
var isDone = false;
function statusCheck(status) {
    status ? console.log('All set good to go !') : console.log('Still working on..!');
}
statusCheck(isDone);
statusCheck(true);
statusCheck(n);
