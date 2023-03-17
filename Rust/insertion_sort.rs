pub fn insertion_sort<T: Ord + Copy> (arr: &mut[T]) {

    for i in 1..arr.len() {
        let mut j = i;
        let current = arr[i];

        while j > 0 && current < arr[j - 1] {
            arr[j] = arr[j - 1];
            j -= 1;
        }

        arr[j] = current;
    }
}


fn main() {

    let mut arr = vec![5,2,4,6,1,3];
    
    println!("Unsorted array: {:?}", arr);

    insertion_sort(&mut arr);
    println!("Sorted array: {:?}", &arr);

}
