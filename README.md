# promise
## Mục tiêu
    - Hiểu được cơ chế  hoạt động của promise
    - Biết cách khai báo promise, promise all, promise race
    - Biết cách vận dụng promise, promise all, promise race
    
### Nội dung bài học
    1. Khai báo promise
        new Promise(resolve, reject => {
            //code here
		});
    2. Promise có 3 trạng thái Pending - Fulfilled - Rejected
      - Pending là trạng thái khi bạn khởi tạo một Promise nhưng chưa thiết lập kết quả cho nó, tức là chưa sử dụng resolve và reject.
      - Fulfilled còn được gọi là resolved, đây là trạng thái của Promise đã thành công, trạng thái này xảy ra khi bạn sử dụng resolve.
      - Rejected là trạng thái thao tác thất bại, trạng thái này xảy ra khi bạn sử dụng reject. Khi bạn sử dụng reject thì bắt buộc phải khai báo hành động xử lý cho nó (tức sử dụng then hoặc catch).
      
    3. sử dụng promise
        var myPromise = new Promise(resolve, reject => {
            //code here
		});
        
        myPromise.then( result => {
            //handle data
        })
        .catch( error => {
            //handle error
        });
	
    4.Promise.all
    
    cú pháp: Promise.all(iterable)
    - Phương thức Promise.all(iterable) trả ra một Promise mới và promise mới này chỉ được kết thúc khi tất cả các promise trong iterable kết thúc hoặc có một promise nào đó xử lý thất bại. Kết quả của promise mới này là một mảng chứa kết quả của tất cả các promise theo đúng thứ tự hoặc kết quả lỗi của promise gây lỗi.
Promise all:
![alt text](https://github.com/thanhcong051593/promise/blob/master/tE2EKoM_xgraau.png "Promise all")
   
    link tham khảo: https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    
    5. Promise.race
    cú pháp: Promise.race(iterable)
    - Promise.race([promise1, promise2, ...]). Phương thức này nhận vào một mảng các promises và sẽ resolve/reject ngay khi một trong số các promises này hoàn thành/xảy ra lỗi.

Promise race:
![alt text](https://github.com/thanhcong051593/promise/blob/master/PPSnMLL_cix7cx.png "Promise race")
    link tham khảo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
    
## Thực hành
    - Viết đoạn code sử dụng promise để đọc file data.txt
## Hướng dẫn
    B1: Tạo 1 file data.txt có nội dụng dung "Trung tâm tin học CodeGym"
    B2: tạo 1 file promise.js
    B3: import thư viện readFile
    B4: khai báo promise
    B5: Viết code
