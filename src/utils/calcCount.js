export const calcTotalCount = (item) => {
    return item.reduce((count, obj) => count + obj.count, 0);;
}