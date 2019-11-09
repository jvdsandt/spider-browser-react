
// input format: '2019-04-29T17:29:24+00:00'
function formatTimestamp(input) {
    if (input === null) {
        return '';
    }
    return input.substring(0, 10) + ' ' + input.substring(11, 16);
}

function formatSha(input) {
    if (input === null) {
        return '';
    }
    return input.substring(0, 7);
}

export { formatTimestamp, formatSha }