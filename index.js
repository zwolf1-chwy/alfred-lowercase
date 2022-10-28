import alfy from 'alfy';

const data = process.argv[2]

alfy.output([
    {
        title: data,
        arg: data
    }
]);