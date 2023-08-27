class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        ArrayList<Boolean> bool = new ArrayList<>();

        int max = candies[0];
         for (int candy : candies) {
            max = Math.max(max, candy);
        }

        for (int i = 0; i < candies.length; i++) {
            if (candies[i] + extraCandies >= max) {
                bool.add(true);
            } else {
                bool.add(false);
            }
        }
     
        return bool;
        
    }
}