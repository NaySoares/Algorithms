using System;


namespace MyInsertionSort
{
    public class ExampleInsertionSort
    {
        private void Sort(int[] inputArr)
        {
            Console.WriteLine("Unsorted array: ");
            Array.ForEach(inputArr, Console.Write);
            Console.WriteLine();
            int n = inputArr.Length;

            for (int j = 1; j < n; j++)
            {
                // current element in unsorted subarray
                int currentValue = inputArr[j];
                // last element of sorted subarray
                int i = j - 1;

                while (i > -1 && currentValue < inputArr[i])
                {
                    inputArr[i + 1] = inputArr[i];
                    i = i - 1;
                };
                inputArr[i + 1] = currentValue;
            };
        }
    
        public static void Main()
        {
            int[] arr = { 5,2,4,6,1,3 };
            var arrUtils = new ExampleInsertionSort();
            arrUtils.Sort(arr);
            Console.WriteLine("Sorted array: ");
            Array.ForEach(arr, Console.Write);
        }
    };
}