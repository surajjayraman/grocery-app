var n = 1;
//n = 'Bobb';
n = 12356;
var isDone = false;
// array
var names = ['Suraj', 'Tejas', 'Sweety'];
var anyName = ['Suraj', 'Tejas', 'Sweety'];
function statusCheck(status) {
    status ? console.log('All set good to go !') : console.log('Still working on..!');
}
statusCheck(isDone);
statusCheck(true);
statusCheck(n);
// assign integer
names = [12345];
anyName = [2023];
// invalid type return
function getName() {
    return 'Sweety';
}
