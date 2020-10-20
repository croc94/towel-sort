
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix == null) {
        return [];
    }

    if (matrix.length === 0) {
        return matrix;
    }

    let result = [], matrix_length = matrix.length;

    for (let i = 1; i <= matrix_length; i++) {

        let count_arr = 0;

        if (i % 2 !== 0) {
            for (let j = 1; j < i; j++) {
                if (i === 1) {
                    continue;
                }
                count_arr += matrix[j - 1].length;
            }
            odd_arr_sort (matrix[i - 1], count_arr);
        } else {
            for (let j = 0; j < i; j++) {
                count_arr += matrix[j].length;
            }
            even_arr_sort (matrix[i - 1], count_arr);
        }
    }

    function odd_arr_sort (odd_arr, count) {
        for (let i = 0, odd_arr_length = odd_arr.length; i < odd_arr_length; i++) {
            result[i + count] = odd_arr[i];
        }
    }

    function even_arr_sort (even_arr, count) {
        for (let i = 0, even_arr_length = even_arr.length; i <  even_arr_length; i++) {
            result[count - i - 1] = even_arr[i];
        }
    };
    return result;
}
