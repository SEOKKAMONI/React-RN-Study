#include <stdio.h>
int main(void)
{
    int n, c, i, j,temp;
    int studentSize[101];
    scanf("%d %d", &n, &c);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &studentSize[i]);
    }

    for (i = 0; i < n; i++)
    {
        for (j = i+1; j < n; j++)
        {
            if (studentSize[i] > studentSize[j])
            {
                temp = studentSize[i];
                studentSize[i] = studentSize[j];
                studentSize[j] = temp;
            }
        }
    }

    int k =0;
    for(j=0;j<n;j++) {
        printf("%d ", studentSize[j]);
        k++;
        if(k == c) {
            printf("\n");
            k=0;
        }
    }
}