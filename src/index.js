
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    let result = [];
    let k = 0;
    if (!(matrix)) {
        return result;
    } else {
        for (let i = 0; i < matrix.length; i++){        
            if (!(i % 2)) {
                for ( let j = 0; j < matrix[i].length; j++) {
                    result[k] = matrix[i][j];
                    k++;
                }                     
            } else {
                for ( let j = matrix[i].length-1; j >= 0; j--) {
                    result[k] = matrix[i][j];
                    k++
                } 
            }    
        }
    }    
  return result;
}
