#include<iostream>
using namespace std ;
#include<string>

class store
{
 public :
 string itemname[];
   int codeno;
   int size ;
   float itemPrice;
   int * ptr ;

   store(int, int, float);
    
  void store 
  void store_codeNo();
  void List_items();
  void List_codeNo();
  void ItemPrice();

};

store :: store(int n, int s, float ip){
         codeno = n ;
         size = s ;
         itemPrice = ip ;
    }

void store :: store_items()
    {
        cout<<"Add the items in stock : "<<endl;
        for(int i = 0 ; i < size ; i++)
        {
           cin>>itemname[i];
           cout<<endl;
        }
    }
int main() {

    int choice ;
    cout<<"Enter the case you want to do : "<<endl;
    cin>>choice;
 
    switch(choice)
    {
        case 1: store_codeNo();

        case 2: List_items();

        case 3: addInstock();

        case 4: List_codeNo();

        case 5: ItemPrice();
    }
return 0;
}