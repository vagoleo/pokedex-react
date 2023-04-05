export const capitalize = (string) => {
    return string[0].toUpperCase() + string.substring(1);
}

export const formatProp = (string) => {
    let split = string.split('-');
    let cap = split.map(word => capitalize(word));
    return cap.join(' ');
}