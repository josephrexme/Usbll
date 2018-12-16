export const getDevice = resolution => {
    let device = 'Mobile';
    if(resolution >= 1024) {
        device = 'Desktop'
    } else if(resolution >= 720) {
        device = 'Tablet'
    }
    return device;
};

