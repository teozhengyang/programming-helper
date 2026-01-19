from typing import List

# standard prefix sum with hashmap approach
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        counter = {}
        prefix = 0
        counter[prefix] = 1
        result = 0

        for num in nums: 
            prefix += num
            # subarray of sum k = current prefix sum - difference 
            # difference = previous prefix sum
            difference = prefix - k 
            result += counter.get(difference, 0)
            # update counter
            if prefix in counter: 
                counter[prefix] += 1
            else:
                counter[prefix] = 1
        
        return result

# test cases
if __name__ == "__main__":
    sol = Solution()
    # print array and expected output and actual output
    print("Test cases:")
    print("Input: nums = [1,1,1], k = 2")
    print("Expected Output: 2")
    print("Actual Output:", sol.subarraySum([1,1,1], 2))
    print()
    print("Input: nums = [1,2,3], k = 3")
    print("Expected Output: 2")
    print("Actual Output:", sol.subarraySum([1,2,3], 3))
    print()
    print("Input: nums = [1,-1,0], k = 0")          
    print("Expected Output: 3")
    print("Actual Output:", sol.subarraySum([1,-1,0], 0))
    print()
    print("Input: nums = [3,4,7,2,-3,1,4,2], k = 7")
    print("Expected Output: 4")
    print("Actual Output:", sol.subarraySum([3,4,7,2,-3,1,4,2], 7))
    print()
    print("Input: nums = [1], k = 0")
    print("Expected Output: 0")
    print("Actual Output:", sol.subarraySum([1], 0))
    