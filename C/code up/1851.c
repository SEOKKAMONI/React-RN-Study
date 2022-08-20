#include <stdio.h>
void hello(int n) {
    if(n <= 0) {
        return;
    }
    hello(n-1);
    printf("*");

}

int main(void) {
    int n;
    scanf("%d", &n);
    hello(n);
}