export class App {

  public message = 'Hello World!';

  public items=[
    "one",
    'two',
    "three",
    "four",
    "five"
  ]

  public selectedItems=[]

  showSelected(){
    console.log(this.selectedItems);
    
  }
}
