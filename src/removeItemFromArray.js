export default function removeItemFromArray(item, arr) {
    let itemIndex = arr.indexOf(item);
    arr.splice(itemIndex, 1);
}