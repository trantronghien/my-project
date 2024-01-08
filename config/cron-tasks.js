module.exports = {
    //    *: Đại diện cho tất cả các giá trị trong phạm vi đó.
    //    */n: Thực hiện mỗi n đơn vị thời gian.
    //    n: Các giá trị cụ thể.
    //    0 0 * * *: Chạy một lần mỗi ngày vào lúc 00:00.
    //    \*/15 * * * *: Chạy mỗi 15 phút.
    //    0 0 * * MON: Chạy một lần mỗi thứ Hai vào lúc 00:00.
    //    0 0 1 * *: Chạy một lần vào ngày đầu tiên của mỗi tháng vào lúc 00:0
    /**
        rule
            *    *    *    *    *    *
            ┬    ┬    ┬    ┬    ┬    ┬
            │    │    │    │    │    |
            │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
            │    │    │    │    └───── month (1 - 12)
            │    │    │    └────────── day of month (1 - 31)
            │    │    └─────────────── hour (0 - 23)
            │    └──────────────────── minute (0 - 59)
            └───────────────────────── second (0 - 59, OPTIONAL)
     **/

    myJob: {
        task: ({ strapi }) => {
            // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
        },
        options: {
            rule: "0 0 1 * * 1",
            tz: "Asia/Ho_Chi_Minh",
            // start 10 seconds from now
            // start: new Date(Date.now() + 10000),
            // // end 20 seconds from now
            // end: new Date(Date.now() + 20000),
        },
    },

    /// mỗi 10 giây
    once10Seconds: {
        task: ({ strapi }) => {
            console.log('run once10Seconds: ' + Date.now().toString());
        },
        options: {
            rule: "*/10 * * * * *",
            tz: "Asia/Ho_Chi_Minh",
        },
    }
    
};