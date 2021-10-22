let l = nums.length;
for (let i = 0; i < l; i++) { // outer loop to apply the inner one to each final position
    for (let j = 0; j < l; j++) { // inner lopp to move an element to its final position
        if (nums[j+1] < nums[j]) {
            let inv = nums[j];
            nums[j] = nums[j+1];
            nums[j+1] = inv;
        }
    }
}
