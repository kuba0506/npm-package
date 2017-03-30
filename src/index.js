// export default (content, words) => (
//     content.replace(
//         new RegExp(words.join('|'), 'ig'),
//         '***'
//     )
// );

export const sensitiveWords =  (content, words) => (
    content.replace(
        new RegExp(words.join('|'), 'ig'),
        '***'
    )
);
