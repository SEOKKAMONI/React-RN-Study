#include <stdio.h>
void hello(int n) {
    if(n < 1) {
        return;
    }
    hello(n-1);
    printf("%d ", n);
}

int main(void) {
    int n;
    scanf("%d", &n);
    hello(n);
}