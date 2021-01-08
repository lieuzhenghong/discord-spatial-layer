import main from './runClient';

window.onload = function() {
    console.log('window loaded')
    const secret = 'MAGIC_VALUE';
    main(secret);
}
