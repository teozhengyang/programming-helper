from typing import List

# find prefix product and divide by current element (handle zero case as well)
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = 1
        result = []
        for num in nums:
            product *= num
        for i, num in enumerate(nums):
            # handle zero case
            if num == 0:
                val = 1
                for j, num_1 in enumerate(nums):
                    if i == j:
                        continue
                    else:
                        val *= num_1
                result.append(val) 
            else: 
                val = product // num
                result.append(val)
        return result
    
# test cases
if __name__ == "__main__":
    sol = Solution()
    # print array and expected output and actual output
    print("Test cases:")
    print("Input: nums = [1,2,3,4]")
    print("Expected Output: [24,12,8,6]")
    print("Actual Output:", sol.productExceptSelf([1,2,3,4]))
    print()
    print("Input: nums = [-1,1,0,-3,3]")
    print("Expected Output: [0,0,9,0,0]")
    print("Actual Output:", sol.productExceptSelf([-1,1,0,-3,3]))
    print()
    print("Input: nums = [0,0]")
    print("Expected Output: [0,0]")
    print("Actual Output:", sol.productExceptSelf([0,0]))
    print()
    print("Input: nums = [5]")
    print("Expected Output: [1]")
    print("Actual Output:", sol.productExceptSelf([5]))