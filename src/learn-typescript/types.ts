var n: Number = 1;

//n = 'Bobb';
n = 12356;
let isDone: Boolean = false;

// array
let names: String[] = ['Suraj', 'Tejas', 'Sweety'];
let anyName : any[] = ['Suraj', 'Tejas', 'Sweety'];

function statusCheck(status: Boolean) {
    status ? console.log('All set good to go !') : console.log('Still working on..!')
}

statusCheck(isDone);
statusCheck(true);
statusCheck(n);
// assign integer
names = [12345];
anyName = [2023];