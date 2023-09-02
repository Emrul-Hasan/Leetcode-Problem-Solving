class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result=new int[nums.length];
        int prod=1;
        for(int i=1;i<nums.length;i++){
            prod*=nums[i];
        }
        result[0]=prod;
        for(int i=1;i<nums.length;i++){
            if(nums[i]==0){
                prod=1;
                for(int j=0;j<i;j++){
                    prod*=nums[j];
                }
                for(int j=i+1;j<nums.length;j++){
                    prod*=nums[j];
                }
                result[i]=prod;
            }else{
                prod=(prod/nums[i])*nums[i-1];
                result[i]=prod;
            }
        }
        return result;
    }
}