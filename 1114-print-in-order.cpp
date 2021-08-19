class Foo {
public:
    int count = 0;
    mutex mtx;
    condition_variable cv;
    Foo() {
        count = 1;
    }

    void first(function<void()> printFirst) {
        unique_lock<mutex> lck(mtx);
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        count = 2;
        cv.notify_all();
    }

    void second(function<void()> printSecond) {
        unique_lock<mutex> lck(mtx);
        cv.wait(lck, [this]() { return count == 2;});
        // printSecond() outputs "second". Do not change or remove this line.
        printSecond();
        count = 3;
        cv.notify_all();
    }

    void third(function<void()> printThird) {
        unique_lock<mutex> lck(mtx);
        cv.wait(lck, [this]() { return count == 3;});
        // printThird() outputs "third". Do not change or remove this line.
        printThird();
    }
};
