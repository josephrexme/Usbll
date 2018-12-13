import Handlebars from 'handlebars';


const source = document.getElementById('row-template');
const template = Handlebars.compile(source);
const context = {
    rating: 1,
    comment: 'jnjfnjxfmncszcnvjm',
    browser: 'Chrome',
    device: 'Desktop',
    platform: 'macOS',
    location: 'Nigeria'
};
const html = template(context);
const contentLoop = document.getElementById('content-loop');
contentLoop.innerHTML = html;

